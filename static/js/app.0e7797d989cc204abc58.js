webpackJsonp([1],{"6r/P":function(e,t){},AJzD:function(e,t){},An4N:function(e,t){},"C0+T":function(e,t){},NHnr:function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=i("7+uW"),a=i("//Fk"),l=i.n(a),r=i("mtWM"),s=i.n(r),o={tokenKey:"NDSKTOKEN",timeout:3e4,baseUrl:"http://localhost:8001"},c=o.tokenKey;var d={getToken:function(){return localStorage.getItem(c)},setToken:function(e){return localStorage.setItem(c,e)},removeToken:function(){return localStorage.removeItem(c)}},u=s.a.create({baseURL:o.baseUrl,timeout:o.timeout});u.interceptors.request.use(function(e){return d.getToken()&&(console.log("request:"+e.url+":"+d.getToken()),e.headers.token=d.getToken()),e.headers["Content-Type"]="application/json",e},function(e){l.a.reject(e)}),u.interceptors.response.use(function(e){return e.data},function(e){console.log(e),401==e.response.status&&(alert("请重新登录"),window.location="/login")});var p=u,m={name:"Sidebar",props:["activated"],data:function(){return{usedSpace:0,maxSpace:524288e3,percentage:0,customColors:[{color:"#909399",percentage:80},{color:"#e6a23c",percentage:90},{color:"red",percentage:100}]}},mounted:function(){this.getMaxSpace(),this.getUsedSpace()},methods:{getUsedSpace:function(){var e=this;p.get("/user/usedSpace").then(function(t){e.usedSpace=t}).catch(function(e){console.error(e)})},getMaxSpace:function(){var e=this;p.get("/user/maxSpace").then(function(t){e.maxSpace=t}).catch(function(e){console.error(e)})},getPercentage:function(){return this.percentage=Math.round(this.usedSpace/this.maxSpace*100),this.percentage},displaySize:function(e){return e<1024?e+"B":e<1048576?Math.round(e/1024)+"KB":e<1073741824?Math.round(e/1048576)+"MB":Math.round(e/1073741824)+"GB"},getUsedSpaceAndMaxSpace:function(){return this.displaySize(this.usedSpace)+" / "+this.displaySize(this.maxSpace)}}},f={render:function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("el-col",{attrs:{span:4}},[i("el-menu",{staticClass:"el-menu-vertical-demo",attrs:{"default-active":e.activated,"background-color":"#EBEEF5"},on:{open:e.handleOpen,close:e.handleClose}},[i("el-menu-item",{attrs:{index:"1",onclick:"location='/files'"}},[i("i",{staticClass:"el-icon-folder-opened"}),e._v(" "),i("span",{attrs:{slot:"title"},slot:"title"},[i("a",[e._v("全部文件")])])]),e._v(" "),i("el-menu-item",{attrs:{index:"2"}},[i("i",{staticClass:"el-icon-picture-outline"}),e._v(" "),i("span",{attrs:{slot:"title"},slot:"title"},[e._v("图片")])]),e._v(" "),i("el-menu-item",{attrs:{index:"3"}},[i("i",{staticClass:"el-icon-video-play"}),e._v(" "),i("span",{attrs:{slot:"title"},slot:"title"},[e._v("视频")])]),e._v(" "),i("el-menu-item",{attrs:{index:"4"}},[i("i",{staticClass:"el-icon-document"}),e._v(" "),i("span",{attrs:{slot:"title"},slot:"title"},[e._v("文档")])]),e._v(" "),i("br"),i("br"),e._v(" "),i("el-menu-item",{attrs:{index:"5",onclick:"location='/share'"}},[i("i",{staticClass:"el-icon-share"}),e._v(" "),i("span",{attrs:{slot:"title"},slot:"title"},[e._v("我的分享")])]),e._v(" "),i("el-menu-item",{attrs:{index:"6",onclick:"location='/recyclebin'"}},[i("i",{staticClass:"el-icon-delete"}),e._v(" "),i("span",{attrs:{slot:"title"},slot:"title"},[e._v("回收站")])]),e._v(" "),i("br"),e._v(" "),i("el-tooltip",{attrs:{content:e.getUsedSpaceAndMaxSpace(),placement:"bottom"}},[i("el-progress",{staticStyle:{margin:"10px"},attrs:{percentage:e.getPercentage(),color:e.customColors}})],1),e._v(" "),i("br"),i("br"),i("br"),i("br"),i("br"),i("br"),i("br"),i("br"),i("br"),i("br"),i("br"),i("br")],1)],1)},staticRenderFns:[]};var h=i("VU/8")(m,f,!1,function(e){i("QnAO")},null,null).exports,v={name:"App",data:function(){return{}},components:{Sidebar:h}},T={render:function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticStyle:{height:"100%"},attrs:{id:"app"}},[t("router-view")],1)},staticRenderFns:[]};var b=i("VU/8")(v,T,!1,function(e){i("C0+T")},null,null).exports,x=i("/ocq"),y={render:function(){var e=this.$createElement,t=this._self._c||e;return t("el-menu",{staticClass:"el-menu-demo",attrs:{"default-active":this.activeIndex,mode:"horizontal","background-color":"#304156"},on:{select:this.handleSelect}},[t("el-menu-item",{staticStyle:{color:"white"},attrs:{index:"1"}},[t("i",{staticClass:"el-icon-cloudy"}),this._v("cloud")])],1)},staticRenderFns:[]};var _=i("VU/8")({name:"NavbarTop",data:function(){return{}}},y,!1,function(e){i("dZ25")},null,null).exports,g={name:"FileArea",data:function(){return{selected:!1,files:[],currentPath:1,pathStack:[],selections:[],displayMode:"list",searchInput:""}},mounted:function(){this.getFilesAtCurrentPath()},methods:{getFilesAtCurrentPath:function(){var e=this;p.get("/file/dir/"+this.currentPath).then(function(t){e.files=t})},enterFolder:function(e,t){this.pathStack.push({fileId:e,name:t}),console.log(this.pathStack),this.currentPath=e,this.getFilesAtCurrentPath()},home:function(){this.currentPath=1,this.pathStack=[],this.getFilesAtCurrentPath()},back:function(){this.pathStack.pop(),console.log(this.pathStack),0==this.pathStack.length?this.currentPath=1:this.currentPath=this.pathStack[this.pathStack.length-1].fileId,0==this.currentPath?this.search():this.getFilesAtCurrentPath()},download:function(e){0==e.directory?this.downloadFile(e.fileId):this.message("暂不支持下载文件夹","warning")},downloadFile:function(e){window.location=o.baseUrl+"/file/download/"+e},deleteFile:function(e,t){var i=this;1==confirm("是否删除该文件？删除后将无法找回")&&p.delete("/"+(1==t?"folder/":"file/")+e).then(function(e){i.getFilesAtCurrentPath(),i.notifiy(e.message,null,1==e.data.status?"success":"error")}).catch(function(e){i.notifiy("删除出错",null,"error")})},displaySize:function(e){var t=e.size;return 1==e.directory?"-":t<1024?t+"B":t<1048576?Math.round(t/1024)+"KB":t<1073741824?Math.round(t/1048576)+"MB":Math.round(t/1073741824)+"GB"},openCreateFolder:function(){var e=this;this.$prompt("输入文件夹名称","新建文件夹",{confirmButtonText:"创建",cancelButtonText:"取消",inputValidator:this.folderNameValidator,inputErrorMessage:"文件夹重名或不符合命名规范（15字符以内）"}).then(function(t){var i=t.value;e.createFolder(i)})},folderNameValidator:function(e){if(e.length>15)return!1;for(var t=0;t<this.files.length;t++)if(e==this.files[t].filename&&1==this.files[t].directory)return!1;return!0},createFolder:function(e){var t=this;p.post("/folder",null,{params:{folderName:e,path:this.currentPath}}).then(function(e){t.getFilesAtCurrentPath(),t.notifiy(e.message,null,1==e.data.status?"success":"error")}).catch(function(e){t.notifiy("创建文件夹出错",null,"error")})},uploadFile:function(e){var t=this,i=new FormData;i.append("file",e.file),p.post("/file/upload/"+this.currentPath,i,{onUploadProgress:function(e){console.log(e.loaded/e.total)}}).then(function(e){t.getFilesAtCurrentPath(),t.notifiy(e.message,null,1==e.data.status?"success":"error")}).catch(function(e){t.notifiy("上传文件出错",null,"error")})},handleSelectionChange:function(e){this.selections=e,this.selections.length>0?this.selected=!0:this.selected=!1},deleteSelected:function(){var e=this,t=this;if(1==confirm("是否删除所选的文件(无法找回)")){for(var i=function(i){var n=e.selections[i];p.delete("/"+(1==n.directory?"folder":"file")+"/"+n.fileId).then(function(e){0==e.data.status&&t.notifiy("删除失败","文件名："+n.filename,"error")}).catch(function(e){t.notifiy("删除出错","文件名："+n.filename,"error")})},n=0;n<this.selections.length;n++)i(n);this.getFilesAtCurrentPath(),this.notifiy("删除完成",null,"success")}},notifiy:function(e,t,i){this.$notify({title:e,message:t,type:i})},message:function(e,t){this.$message({message:e,type:t,duration:2500})},search:function(){var e=this,t=this;p.get("/file/search/"+this.searchInput).then(function(e){t.files=e,0!=t.currentPath&&(t.pathStack=[],t.currentPath=0,t.pathStack.push({fileId:0,name:"搜索结果"}))}).catch(function(t){e.notifiy("搜索出错",null,"error"),console.log(t)})},dummy:function(){}}},I={render:function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("el-col",{attrs:{span:20}},[i("el-header",{staticClass:"toolbar",staticStyle:{"padding-top":"10px"}},[i("el-col",{attrs:{span:2}},[i("el-upload",{attrs:{action:e.dummy,"http-request":e.uploadFile,"show-file-list":!1}},[i("el-button",{attrs:{type:"primary",icon:"el-icon-upload"}},[e._v("上传")])],1)],1),e._v(" "),i("el-col",{attrs:{span:6}},[i("el-button",{attrs:{type:"primary",icon:"el-icon-folder-add"},on:{click:e.openCreateFolder}})],1),e._v(" "),i("el-col",{attrs:{span:8}},[0==e.selected?i("br"):e._e(),e._v(" "),1==e.selected?i("el-button",{attrs:{type:"primary",icon:"el-icon-download"}},[e._v("下载")]):e._e(),e._v(" "),1==e.selected?i("el-button",{attrs:{type:"primary",icon:"el-icon-delete"},on:{click:e.deleteSelected}},[e._v("删除")]):e._e()],1),e._v(" "),i("el-col",{attrs:{span:8}},[i("el-input",{attrs:{placeholder:"搜索我的文件",maxlength:"20"},nativeOn:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.search(t)}},model:{value:e.searchInput,callback:function(t){e.searchInput=t},expression:"searchInput"}},[i("el-button",{attrs:{slot:"append",type:"primary",icon:"el-icon-search"},on:{click:e.search},slot:"append"})],1)],1)],1),e._v(" "),i("el-breadcrumb",{staticStyle:{"padding-left":"20px"},attrs:{separator:"/"}},[i("el-col",{attrs:{span:20}},[i("el-breadcrumb-item",[1!=e.currentPath?i("a",{attrs:{role:"link"},on:{click:function(t){return e.back()}}},[e._v("返回")]):e._e()]),e._v(" "),i("el-breadcrumb-item",[i("a",{attrs:{role:"link"},on:{click:function(t){return e.home()}}},[e._v("全部文件")])]),e._v(" "),e._l(e.pathStack,function(t){return i("el-breadcrumb-item",{key:t.fileId},[i("a",[e._v(e._s(t.name))])])})],2),e._v(" "),i("el-col",{attrs:{span:4}})],1),e._v(" "),i("el-main",["list"==e.displayMode?i("el-table",{directives:[{name:"loading",rawName:"v-loading",value:e.loading,expression:"loading"}],attrs:{data:e.files,height:"500px","element-loading-text":"加载中..."},on:{"selection-change":e.handleSelectionChange}},[i("el-table-column",{attrs:{type:"selection"}}),e._v(" "),i("el-table-column",{attrs:{prop:"filename",label:"文件名",fixed:"",sortable:""},scopedSlots:e._u([{key:"default",fn:function(t){return[1==t.row.directory?i("a",{attrs:{role:"link"},on:{click:function(i){return e.enterFolder(t.row.fileId,t.row.filename)}}},[e._v(e._s(t.row.filename))]):i("a",[e._v(e._s(t.row.filename))])]}}],null,!1,813810055)}),e._v(" "),i("el-table-column",{attrs:{prop:"type",label:"类型",fixed:"",sortable:""}}),e._v(" "),i("el-table-column",{attrs:{prop:"size",label:"大小",fixed:"",sortable:""},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v("\n                    "+e._s(e.displaySize(t.row))+"\n                ")]}}],null,!1,2812738253)}),e._v(" "),i("el-table-column",{attrs:{prop:"updateDate",label:"修改日期",fixed:"",sortable:""}}),e._v(" "),i("el-table-column",{attrs:{label:"操作"},scopedSlots:e._u([{key:"default",fn:function(t){return[i("el-button",{attrs:{type:"info",size:"mini",icon:"el-icon-download"},on:{click:function(i){return e.download(t.row)}}}),e._v(" "),i("el-button",{attrs:{type:"warning",size:"mini",icon:"el-icon-delete"},on:{click:function(i){return e.deleteFile(t.row.fileId,t.row.directory)}}}),e._v(" "),i("el-button",{attrs:{type:"primary",size:"mini",icon:"el-icon-share"}})]}}],null,!1,1132557839)})],1):e._e()],1)],1)},staticRenderFns:[]};var w={name:"AllFiles",components:{NavbarTop:_,Sidebar:h,FileArea:i("VU/8")(g,I,!1,function(e){i("WUZW")},null,null).exports},data:function(){return{}}},S={render:function(){var e=this.$createElement,t=this._self._c||e;return t("div",[t("navbar-top"),this._v(" "),t("el-row",[t("sidebar",{attrs:{activated:"1"}}),this._v(" "),t("file-area")],1)],1)},staticRenderFns:[]};var k=i("VU/8")(w,S,!1,function(e){i("6r/P")},null,null).exports,F={name:"MyShareList",data:function(){return{shareList:[{fileId:0,filename:"test",saveTimes:100,downloadTimes:200,createDate:"2020-11-15",expireTime:"永久有效"},{fileId:0,filename:"test",saveTimes:100,downloadTimes:200,createDate:"2020-11-15",expireTime:"永久有效"},{fileId:0,filename:"test",saveTimes:100,downloadTimes:200,createDate:"2020-11-15",expireTime:"永久有效"},{fileId:0,filename:"test",saveTimes:100,downloadTimes:200,createDate:"2020-11-15",expireTime:"永久有效"},{fileId:0,filename:"test",saveTimes:100,downloadTimes:200,createDate:"2020-11-15",expireTime:"永久有效"},{fileId:0,filename:"test",saveTimes:100,downloadTimes:200,createDate:"2020-11-15",expireTime:"永久有效"},{fileId:0,filename:"test",saveTimes:100,downloadTimes:200,createDate:"2020-11-15",expireTime:"永久有效"},{fileId:0,filename:"test",saveTimes:100,downloadTimes:200,createDate:"2020-11-15",expireTime:"永久有效"},{fileId:0,filename:"test",saveTimes:100,downloadTimes:200,createDate:"2020-11-15",expireTime:"永久有效"},{fileId:0,filename:"test",saveTimes:100,downloadTimes:200,createDate:"2020-11-15",expireTime:"永久有效"},{fileId:0,filename:"test",saveTimes:100,downloadTimes:200,createDate:"2020-11-15",expireTime:"永久有效"},{fileId:0,filename:"test",saveTimes:100,downloadTimes:200,createDate:"2020-11-15",expireTime:"永久有效"},{fileId:0,filename:"test",saveTimes:100,downloadTimes:200,createDate:"2020-11-15",expireTime:"永久有效"},{fileId:0,filename:"test",saveTimes:100,downloadTimes:200,createDate:"2020-11-15",expireTime:"永久有效"},{fileId:0,filename:"test",saveTimes:100,downloadTimes:200,createDate:"2020-11-15",expireTime:"永久有效"},{fileId:0,filename:"test",saveTimes:100,downloadTimes:200,createDate:"2020-11-15",expireTime:"永久有效"},{fileId:0,filename:"test",saveTimes:100,downloadTimes:200,createDate:"2020-11-15",expireTime:"永久有效"},{fileId:0,filename:"test",saveTimes:100,downloadTimes:200,createDate:"2020-11-15",expireTime:"永久有效"},{fileId:0,filename:"test",saveTimes:100,downloadTimes:200,createDate:"2020-11-15",expireTime:"永久有效"},{fileId:0,filename:"test",saveTimes:100,downloadTimes:200,createDate:"2020-11-15",expireTime:"永久有效"},{fileId:0,filename:"test",saveTimes:100,downloadTimes:200,createDate:"2020-11-15",expireTime:"永久有效"}],selections:[],selected:!1}},methods:{handleSelectionChange:function(e){this.selections=e,console.log(this.selections),0==this.selections.length?this.selected=!1:this.selected=!0}}},C={render:function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("el-col",{attrs:{span:20}},[i("el-main",[i("el-header",{staticClass:"toolbar",staticStyle:{padding:"10px"}},[i("el-col",{attrs:{span:8}},[1==e.selected?i("el-button",{attrs:{type:"warning"}},[e._v("取消所选分享")]):i("p")],1),e._v(" "),i("el-col",{attrs:{span:8}},[i("p")]),e._v(" "),i("el-col",{attrs:{span:8,align:"right"}},[i("el-input",{attrs:{placeholder:"搜索我的分享","suffix-icon":"el-icon-search"}})],1)],1),e._v(" "),i("el-table",{attrs:{data:e.shareList,height:"500px"},on:{"selection-change":e.handleSelectionChange}},[i("el-table-column",{attrs:{type:"selection"}}),e._v(" "),i("el-table-column",{attrs:{label:"文件名",prop:"filename",sortable:""}}),e._v(" "),i("el-table-column",{attrs:{label:"保存次数",prop:"saveTimes",sortable:""}}),e._v(" "),i("el-table-column",{attrs:{label:"下载次数",prop:"downloadTimes",sortable:""}}),e._v(" "),i("el-table-column",{attrs:{label:"创建日期",prop:"createDate",sortable:""}}),e._v(" "),i("el-table-column",{attrs:{label:"失效时间",prop:"expireTime",sortable:""}}),e._v(" "),i("el-table-column",{attrs:{label:"操作"},scopedSlots:e._u([{key:"default",fn:function(t){return[i("el-button",{attrs:{type:"info",size:"mini"},on:{click:function(i){return e.showDetail(t.row.fileId)}}},[e._v("详情")]),e._v(" "),i("el-button",{attrs:{type:"warning",size:"mini"},on:{click:function(i){return e.cancleShare(t.row.fileId)}}},[e._v("取消")])]}}])})],1)],1)],1)},staticRenderFns:[]};var P={name:"MyShares",components:{NavbarTop:_,Sidebar:h,MyShareList:i("VU/8")(F,C,!1,function(e){i("An4N")},null,null).exports}},D={render:function(){var e=this.$createElement,t=this._self._c||e;return t("div",[t("navbar-top"),this._v(" "),t("el-row",[t("sidebar",{attrs:{activated:"5"}}),this._v(" "),t("my-share-list")],1)],1)},staticRenderFns:[]};var U=i("VU/8")(P,D,!1,function(e){i("AJzD")},null,null).exports,A={render:function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("el-col",{attrs:{span:20}},[i("el-main",[i("el-header",{staticClass:"toolbar"},[i("el-col",{attrs:{span:8}},[i("el-button",{attrs:{type:"warning"}},[e._v("清空回收站")]),e._v(" "),i("el-button",{attrs:{type:"warning"}},[e._v("删除所选")]),e._v(" "),i("el-button",{attrs:{type:"warning"}},[e._v("还原所选")])],1),e._v(" "),i("el-col",{attrs:{span:8}},[i("p")]),e._v(" "),i("el-col",{attrs:{span:8}},[i("el-input",{attrs:{placeholder:"搜索回收站","suffix-icon":"el-icon-search"}})],1)],1),e._v(" "),i("el-table",{attrs:{data:e.list,height:"500px"}},[i("el-table-column",{attrs:{type:"selection"}}),e._v(" "),i("el-table-column",{attrs:{label:"文件名",prop:"filename",sortable:""}}),e._v(" "),i("el-table-column",{attrs:{label:"类型",prop:"type",sortable:""}}),e._v(" "),i("el-table-column",{attrs:{label:"删除时间",prop:"deletedTime",sortable:""}}),e._v(" "),i("el-table-column",{attrs:{label:"有效时间",prop:"expireTime",sortable:""}}),e._v(" "),i("el-table-column",{attrs:{label:"操作"},scopedSlots:e._u([{key:"default",fn:function(t){return[i("el-button",{attrs:{type:"info",size:"mini"},on:{click:function(i){return e.recover(t.row.fileId)}}},[e._v("还原")]),e._v(" "),i("el-button",{attrs:{type:"warning",size:"mini"},on:{click:function(e){return delete t.row.fileId}}},[e._v("删除")])]}}])})],1)],1)],1)},staticRenderFns:[]};var M={name:"Recyclebin",components:{NavbarTop:_,Sidebar:h,RecyclebinTable:i("VU/8")({name:"RecycleTable",data:function(){return{list:[{fileId:1,filename:"test",type:"txt",deletedTime:"2020-11-15:20:04:33",expireTime:"30天"},{fileId:1,filename:"test",type:"txt",deletedTime:"2020-11-15:20:04:33",expireTime:"30天"},{fileId:1,filename:"test",type:"txt",deletedTime:"2020-11-15:20:04:33",expireTime:"30天"},{fileId:1,filename:"test",type:"txt",deletedTime:"2020-11-15:20:04:33",expireTime:"30天"},{fileId:1,filename:"test",type:"txt",deletedTime:"2020-11-15:20:04:33",expireTime:"30天"},{fileId:1,filename:"test",type:"txt",deletedTime:"2020-11-15:20:04:33",expireTime:"30天"},{fileId:1,filename:"test",type:"txt",deletedTime:"2020-11-15:20:04:33",expireTime:"30天"},{fileId:1,filename:"test",type:"txt",deletedTime:"2020-11-15:20:04:33",expireTime:"30天"},{fileId:1,filename:"test",type:"txt",deletedTime:"2020-11-15:20:04:33",expireTime:"30天"},{fileId:1,filename:"test",type:"txt",deletedTime:"2020-11-15:20:04:33",expireTime:"30天"},{fileId:1,filename:"test",type:"txt",deletedTime:"2020-11-15:20:04:33",expireTime:"30天"},{fileId:1,filename:"test",type:"txt",deletedTime:"2020-11-15:20:04:33",expireTime:"30天"},{fileId:1,filename:"test",type:"txt",deletedTime:"2020-11-15:20:04:33",expireTime:"30天"},{fileId:1,filename:"test",type:"txt",deletedTime:"2020-11-15:20:04:33",expireTime:"30天"},{fileId:1,filename:"test",type:"txt",deletedTime:"2020-11-15:20:04:33",expireTime:"30天"},{fileId:1,filename:"test",type:"txt",deletedTime:"2020-11-15:20:04:33",expireTime:"30天"},{fileId:1,filename:"test",type:"txt",deletedTime:"2020-11-15:20:04:33",expireTime:"30天"},{fileId:1,filename:"test",type:"txt",deletedTime:"2020-11-15:20:04:33",expireTime:"30天"},{fileId:1,filename:"test",type:"txt",deletedTime:"2020-11-15:20:04:33",expireTime:"30天"},{fileId:1,filename:"test",type:"txt",deletedTime:"2020-11-15:20:04:33",expireTime:"30天"},{fileId:1,filename:"test",type:"txt",deletedTime:"2020-11-15:20:04:33",expireTime:"30天"},{fileId:1,filename:"test",type:"txt",deletedTime:"2020-11-15:20:04:33",expireTime:"30天"},{fileId:1,filename:"test",type:"txt",deletedTime:"2020-11-15:20:04:33",expireTime:"30天"},{fileId:1,filename:"test",type:"txt",deletedTime:"2020-11-15:20:04:33",expireTime:"30天"},{fileId:1,filename:"test",type:"txt",deletedTime:"2020-11-15:20:04:33",expireTime:"30天"},{fileId:1,filename:"test",type:"txt",deletedTime:"2020-11-15:20:04:33",expireTime:"30天"},{fileId:1,filename:"test",type:"txt",deletedTime:"2020-11-15:20:04:33",expireTime:"30天"},{fileId:1,filename:"test",type:"txt",deletedTime:"2020-11-15:20:04:33",expireTime:"30天"},{fileId:1,filename:"test",type:"txt",deletedTime:"2020-11-15:20:04:33",expireTime:"30天"},{fileId:1,filename:"test",type:"txt",deletedTime:"2020-11-15:20:04:33",expireTime:"30天"},{fileId:1,filename:"test",type:"txt",deletedTime:"2020-11-15:20:04:33",expireTime:"30天"}]}}},A,!1,function(e){i("RBIn")},null,null).exports},data:function(){return{}}},R={render:function(){var e=this.$createElement,t=this._self._c||e;return t("div",[t("navbar-top"),this._v(" "),t("el-row",[t("sidebar",{attrs:{activated:"6"}}),this._v(" "),t("recyclebin-table")],1)],1)},staticRenderFns:[]};var E=i("VU/8")(M,R,!1,function(e){i("neJm")},null,null).exports,z={name:"LoginForm",components:{NavbarTop:_},data:function(){return{username:"jay",password:"991228",hostIp:"localhost",hostPort:8001,serviceType:null}},methods:{login:function(){var e=this;d.removeToken(),2==this.serviceType?o.baseUrl="http://"+this.hostIp+":"+this.hostPort:o.baseUrl="http://localhost:8001",p.defaults.baseURL=o.baseUrl,p.post("/login/"+this.username+"/"+this.password).then(function(t){""==t||null==t?e.message("登录失败，请检查用户名和密码","error"):(d.setToken(t),window.location="/files")}).catch(function(t){e.message("登录出错","error")})},testConnection:function(){var e=this;o.baseUrl="http://"+this.hostIp+":"+this.hostPort,p.defaults.baseURL=o.baseUrl,p.get("/connection").then(function(t){e.message(1==t?"连接成功":"连接无效",1==t?"success":"error")}).catch(function(t){console.log(t),e.message("连接失败","error")})},message:function(e,t){this.$message({message:e,type:t,duration:2e3})}}},B={render:function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",[i("navbar-top"),e._v(" "),i("el-main",{staticStyle:{"background-color":"#EBEEF5",height:"100vh"}},[i("el-col",{attrs:{span:9}},[i("p")]),e._v(" "),i("el-col",{attrs:{span:6}},[i("el-card",{staticClass:"box-card"},[i("el-form",{attrs:{"label-width":"80px","label-position":"left"}},[i("el-form-item",{attrs:{label:"用户名"}},[i("el-input",{attrs:{placeholder:"请输入用户名"},model:{value:e.username,callback:function(t){e.username=t},expression:"username"}})],1),e._v(" "),i("el-form-item",{attrs:{label:"密码"}},[i("el-input",{attrs:{placeholder:"请输入密码","show-password":""},model:{value:e.password,callback:function(t){e.password=t},expression:"password"}})],1),e._v(" "),i("el-form-item",{attrs:{label:"服务类型"}},[i("el-select",{attrs:{placeholder:"请选择"},model:{value:e.serviceType,callback:function(t){e.serviceType=t},expression:"serviceType"}},[i("el-option",{attrs:{label:"公用服务",value:"1"}}),e._v(" "),i("el-option",{attrs:{label:"私有服务",value:"2"}})],1)],1),e._v(" "),2==e.serviceType?i("el-form-item",{attrs:{label:"服务主机"}},[i("el-input",{attrs:{placeholder:"请输入服务器主机ip"},model:{value:e.hostIp,callback:function(t){e.hostIp=t},expression:"hostIp"}}),e._v(" "),i("el-input",{attrs:{placeholder:"请输入服务端口"},model:{value:e.hostPort,callback:function(t){e.hostPort=t},expression:"hostPort"}})],1):e._e(),e._v(" "),i("el-form-item",[i("el-button",{attrs:{type:"primary"},on:{click:e.login}},[e._v("登录")]),e._v(" "),1==e.serviceType?i("el-button",{attrs:{type:"info"}},[e._v("注册")]):e._e(),e._v(" "),2==e.serviceType?i("el-button",{attrs:{type:"info"},on:{click:e.testConnection}},[e._v("测试连接")]):e._e()],1)],1)],1)],1)],1)],1)},staticRenderFns:[]};var N=i("VU/8")(z,B,!1,function(e){i("d4TG")},null,null).exports;n.default.use(x.a);var $=new x.a({mode:"history",routes:[{path:"/files",name:"AllFiles",component:k},{path:"/share",name:"MyShares",component:U},{path:"/recyclebin",name:"RecycleBin",component:E},{path:"/login",name:"LoginForm",component:N}]}),V=i("zL8q"),L=i.n(V);i("tvR6");n.default.config.productionTip=!1,n.default.use(L.a),new n.default({el:"#app",router:$,components:{App:b},template:"<App/>"})},QnAO:function(e,t){},RBIn:function(e,t){},WUZW:function(e,t){},d4TG:function(e,t){},dZ25:function(e,t){},neJm:function(e,t){},tvR6:function(e,t){}},["NHnr"]);
//# sourceMappingURL=app.0e7797d989cc204abc58.js.map