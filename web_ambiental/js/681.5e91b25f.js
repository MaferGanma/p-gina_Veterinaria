"use strict";(self["webpackChunkproyecto_practico"]=self["webpackChunkproyecto_practico"]||[]).push([[681],{2681:function(t,s,i){i.r(s),i.d(s,{default:function(){return R}});var o=i(3396),a=i(7139);const e={class:"container-fluid page-header-mision"},c={class:"container"},n={class:"d-flex flex-column align-items-center justify-content-center",style:{"min-height":"400px"}},l=(0,o._)("h3",{class:"display-4 text-white text-uppercase"},"MISIÒN, VISIÓN y OBJETIVOS",-1),r={class:"d-inline-flex text-white"},h={class:"m-0 text-uppercase"},u={class:"text-white",href:"/"},g={class:"container-background",style:{position:"relative"}},_={class:"about",style:{padding:"0",top:"20px"}},p={class:"container",style:{padding:"20px"}},d={class:"row zoomIn animated"},v={class:"col-sm-12"},m={class:"tab-content back_bg",id:"myTabContentMD",style:{padding:"20px","background-color":"white"}},b=(0,o._)("div",{class:"section-header"},[(0,o._)("h4",null," MISIÓN")],-1),y={class:""},C=["innerHTML"],S=(0,o._)("hr",{class:"hr-color"},null,-1),A=(0,o._)("br",null,null,-1),f=(0,o._)("div",{class:"section-header"},[(0,o._)("h3",null,"VISIÓN")],-1),M={class:""},O=["innerHTML"],x=(0,o._)("hr",{class:"hr-color"},null,-1),E=(0,o._)("br",null,null,-1),w=(0,o._)("div",{class:"section-header"},[(0,o._)("h3",null," OBJETIVOS")],-1),I={class:"t"},U=["innerHTML"],T=(0,o._)("i",{class:""},null,-1);function k(t,s,i,k,L,N){return(0,o.wg)(),(0,o.iD)(o.HY,null,[(0,o._)("div",e,[(0,o._)("div",c,[(0,o._)("div",n,[l,(0,o._)("div",r,[(0,o._)("p",h,[(0,o._)("a",u,(0,a.zw)(t.Institucion.institucion_nombre),1)])])])])]),(0,o._)("div",g,[(0,o._)("div",_,[(0,o._)("div",p,[(0,o._)("div",d,[(0,o._)("div",v,[(0,o._)("div",m,[b,(0,o._)("div",y,[(0,o._)("p",{class:"mb-4",innerHTML:t.Institucion.institucion_mision},null,8,C)]),S,A,f,(0,o._)("div",M,[(0,o._)("p",{class:"mb-4",innerHTML:t.Institucion.institucion_vision},null,8,O)]),x,E,w,(0,o._)("div",I,[(0,o._)("p",{class:"mb-4",innerHTML:t.Institucion.institucion_objetivos},null,8,U)])])]),(0,o._)("button",{style:{left:"0"},class:"btn-primary",onClick:s[0]||(s[0]=s=>t.$router.go(-1))},[T,(0,o.Uk)(" Volver atrás ")])])])])])],64)}i(7658);var L=i(65),N={name:"HomeCustom",data(){return{stado_video:0,Conv:0,latestConv:{},latestComun:{},latestAv:{},Cur:0,latestCur:{},latestSem:{},Serv:[],Ofer:[],Publi:[],Gac:[],Event:[],Vid:[],NUM_RESULTS:3,pag:1,pager:0,NUM_RESULTS_CUR:3,pag_cur:1,pager_cur:0,NUM_RESULTS_PUB:3,pag_pub:1,pager_pub:0,Eventos:[],search:"",searchGet:!1,searchValues:[],Publicaciones:[],Ofertas:[],Convocatorias:[]}},computed:{...(0,L.rn)(["url_api","Institucion","MenuConv","MenuCur","Links"])},components:{},methods:{async getTipoConv(){try{let t=await this.axios.get("/api/Tipoconvocatorias/5");this.tipo=t.data.Descripcion.tipo_conv_comun_titulo,this.getConvocatorias()}catch(t){console.log(t)}},async getConvocatorias(){try{let t=await this.axios.get("/api/convocatoriasAll/30");this.Convocatorias=[],t.data.forEach((t=>{"1"==t.con_estado&&t.tipo_conv_comun.tipo_conv_comun_titulo==this.tipo&&this.Convocatorias.push(t)})),this.pager=this.Convocatorias.length/this.NUM_RESULTS,this.pager-Math.trunc(this.pager)>0&&(this.pager=Math.trunc(this.pager)+1),this.$store.commit("loading")}catch(t){console.log(t)}},async getOfertas(){try{let t=await this.axios.get("/api/OfertasAcademicasAll/30");this.Ofertas=t.data,this.pager=this.Ofertas.length/this.NUM_RESULTS,this.pager-Math.trunc(this.pager)>0&&(this.pager=Math.trunc(this.pager)+1),this.$store.commit("loading")}catch(t){console.log(t)}},async getPublicaciones(){try{let t=await this.axios.get("/api/PublicacionesAll/30");this.Publicaciones=t.data,this.pager_pub=this.Publicaciones.length/this.NUM_RESULTS_PUB,this.pager_pub-Math.trunc(this.pager_pub)>0&&(this.pager_pub=Math.trunc(this.pager_pub)+1),this.$store.commit("loading")}catch(t){console.log(t)}},async getEventosAll(){try{let t=await this.axios.get("/api/eventoAll/30");this.Eventos=t.data,this.pager=this.Eventos.length/this.NUM_RESULTS,this.pager-Math.trunc(this.pager)>0&&(this.pager=Math.trunc(this.pager)+1),this.$store.commit("loading")}catch(t){console.log(t)}},async getConvocatoriasAll(){try{let t=await this.axios.get("/api/convocatoriasAll/30");this.Conv=t.data,this.Conv.forEach((t=>{"CONVOCATORIAS"==t.tipo_conv_comun.tipo_conv_comun_titulo&&"1"==t.con_estado?0==Object.keys(this.latestConv).length&&(this.latestConv=t):"COMUNICADOS"==t.tipo_conv_comun.tipo_conv_comun_titulo&&"1"==t.con_estado?0==Object.keys(this.latestComun).length&&(this.latestComun=t):"AVISOS"==t.tipo_conv_comun.tipo_conv_comun_titulo&&"1"==t.con_estado&&0==Object.keys(this.latestAv).length&&(this.latestAv=t)})),this.pager=this.Institucion.autoridad.length/this.NUM_RESULTS,this.pager-Math.trunc(this.pager)>0&&(this.pager=Math.trunc(this.pager)+1)}catch(t){console.log(t)}},async getCursosAll(){try{let t=await this.axios.get("/api/cursosAll/30");this.Cur=t.data,this.Cur.forEach((t=>{"CURSOS"==t.tipo_curso_otro.tipo_conv_curso_nombre&&"1"==t.det_estado?0==Object.keys(this.latestCur).length&&(this.latestCur=t):"SEMINARIOS"==t.tipo_curso_otro.tipo_conv_curso_nombre&&"1"==t.det_estado&&0==Object.keys(this.latestSem).length&&(this.latestSem=t)}))}catch(t){console.log(t)}},async getServiciosAll(){try{let t=await this.axios.get("/api/ServicioAll/30");this.Serv=t.data}catch(t){console.log(t)}},async getOfertasAll(){try{let t=await this.axios.get("/api/OfertasAcademicasAll/30");this.Ofer=t.data}catch(t){console.log(t)}},async getPublicacionesAll(){try{let t=await this.axios.get("/api/publicacionesAll/30");this.Publi=t.data}catch(t){console.log(t)}},async getGacetaAll(){try{let t=await this.axios.get("/api/gacetaunivAll/30");this.Gac=t.data}catch(t){console.log(t)}},async getEventos(){try{let t=await this.axios.get("/api/eventoAll/30");this.Event=t.data}catch(t){console.log(t)}},async getVideos(){try{let t=await this.axios.get("/api/VideosAll/30");this.Vid=t.data,this.$store.commit("loading")}catch(t){console.log(t)}},async setImage(t,s){try{await document.querySelector("."+t).setAttribute("style",'background-image: url("'+s+'");')}catch(i){console.log(i)}},contarConv(t){if(t&&this.Conv){let s=0;return this.Conv.forEach((i=>{i.tipo_conv_comun.tipo_conv_comun_titulo==t&&s++})),s}},contarCur(t){if(t&&this.Cur){let s=0;return this.Cur.forEach((i=>{i.tipo_curso_otro.tipo_conv_curso_nombre==t&&s++})),s}},dmy(t){if(void 0!=t){const s=["enero","febrero","marzo","abril","mayo","junio","julio","agosto","septiembre","octubre","noviembre","diciembre"];let i=t.substr(0,10),o=i.split("-");return o[2]+" de "+s[o[1]-1]+" de "+o[0]}}},created(){this.$store.commit("loadOn"),this.getConvocatoriasAll(),this.getCursosAll(),this.getServiciosAll(),this.getOfertasAll(),this.getOfertas(),this.getPublicaciones(),this.getPublicacionesAll(),this.getGacetaAll(),this.getEventos(),this.getVideos(),this.getEventosAll(),this.getConvocatorias(),this.getTipoConv()}},V=i(89);const P=(0,V.Z)(N,[["render",k]]);var R=P}}]);
//# sourceMappingURL=681.5e91b25f.js.map