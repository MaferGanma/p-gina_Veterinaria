"use strict";(self["webpackChunkproyecto_practico"]=self["webpackChunkproyecto_practico"]||[]).push([[755],{7755:function(i,t,e){e.r(t),e.d(t,{default:function(){return S}});var s=e(3396),n=e(7139);const a=(0,s.uE)('<div class="container-fluid page-header banner-img"><div class="container"><div class="d-flex flex-column align-items-center justify-content-center" style="min-height:400px;"><h3 class="display-4 text-white text-uppercase">CONTACTOS</h3><div class="d-inline-flex text-white"><p class="m-0 text-uppercase"><a class="text-white" href="/">INICIO</a></p><i class="fa fa-angle-double-right pt-1 px-3"></i></div></div></div></div>',1),c={class:"container-fluid pb-5",style:{"padding-top":"100px",position:"relative"}},l={class:"container pb-5"},r={class:"row"},o={class:"col-md-4"},d={class:"d-flex mb-4 mb-lg-0"},u=(0,s._)("div",{class:"d-flex flex-shrink-0 align-items-center justify-content-center bg-primary mr-3",style:{height:"100px",width:"100px"}},[(0,s._)("i",{class:"fa fa-2x fa-envelope text-white"})],-1),m={class:"d-flex flex-column"},g=(0,s._)("h5",{class:""},"Correo Electronico",-1),p={class:"m-0",style:{opacity:"0.5"}},h={class:"m-0"},_={class:"col-md-4"},f={class:"d-flex mb-4 mb-lg-0"},x=(0,s._)("div",{class:"d-flex flex-shrink-0 align-items-center justify-content-center bg-primary mr-3",style:{height:"100px",width:"100px"}},[(0,s._)("i",{class:"fa fa-2x fa-phone text-white"})],-1),b={class:"d-flex flex-column"},v=(0,s._)("h5",{class:""},"Celular",-1),y={class:"m-0"},k={class:"m-0"},w={class:"col-md-4"},I={class:"d-flex mb-4 mb-lg-0"},C=(0,s._)("div",{class:"d-flex flex-shrink-0 align-items-center justify-content-center bg-primary mr-3",style:{height:"100px",width:"100px"}},[(0,s._)("i",{class:"fa fa-2x fa-map-marker text-white"})],-1),j={class:"d-flex flex-column"},A=(0,s._)("h5",{class:""},"Ubicación",-1),L={class:"m-0"},z=["src"];function E(i,t,e,E,M,O){return(0,s.wg)(),(0,s.iD)(s.HY,null,[a,(0,s._)("div",c,[(0,s._)("div",l,[(0,s._)("div",r,[(0,s._)("div",o,[(0,s._)("div",d,[u,(0,s._)("div",m,[g,(0,s._)("p",p,(0,n.zw)(i.Institucion.institucion_correo1),1),(0,s._)("p",h,(0,n.zw)(i.Institucion.institucion_correo2),1)])])]),(0,s._)("div",_,[(0,s._)("div",f,[x,(0,s._)("div",b,[v,(0,s._)("p",y,(0,n.zw)(i.Institucion.institucion_celular1),1),(0,s._)("p",k,(0,n.zw)(i.Institucion.institucion_celular2),1)])])]),(0,s._)("div",w,[(0,s._)("div",I,[C,(0,s._)("div",j,[A,(0,s._)("p",L,(0,n.zw)(i.Institucion.institucion_direccion),1)])])])])]),(0,s._)("iframe",{src:i.Institucion.institucion_api_google_map,width:"100%",height:"600px",frameborder:"0"},null,8,z)])],64)}var M=e(65),O={data(){return{sopen:!1,Links:[],m_inicio:!1,m_conv:!1,m_cur:!1,m_mas:!1,m_link:!1}},computed:{...(0,M.rn)(["url_api","MenuConv","MenuCur","Institucion","getter"])},methods:{click_m(){this.$store.commit("clickLink"),this.$store.commit("idEncrypt"),this.openMenu()},openMenu(){this.sopen=!this.sopen},async getLinks(){try{let i=await this.axios.get("/api/linksIntExtAll/27");this.Links=i.data}catch(i){console.log(i)}this.imgheader()},imgheader(){let i="/assets/img/electronica-header2.jpg",t="/assets/img/img-ambiental.jpeg",e="/assets/img/img-textil.jpg",s="/assets/img/img-electricidad.jpg";var n=document.querySelector(".banner-img");26==this.Institucion.institucion_id?n.setAttribute("style",'background-image:linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url("'+i+'");'):30==this.Institucion.institucion_id?n.setAttribute("style",'background-image:linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url("'+t+'");'):27==this.Institucion.institucion_id?n.setAttribute("style",'background-image:linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url("'+s+'");'):29==this.Institucion.institucion_id&&n.setAttribute("style",'background-image:linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url("'+e+'");')}},created(){this.getLinks()},mounted(){this.getter&&(this.getLinks(),this.$store.state.getter=!1)}},$=e(89);const N=(0,$.Z)(O,[["render",E]]);var S=N}}]);
//# sourceMappingURL=755.9e2057c5.js.map