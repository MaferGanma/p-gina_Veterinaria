<template>
  <div class="carousel">
        <div class="image">
        </div>
                <!--<div class=""> <div class="owl-carousel">   opcional carousel-->
                    <div class="carousel-item">
                      <div class="carousel-img " style="position: absolute; background-size: cover;background-image: linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url(asets/img/BackGround-UPEA-08.jpg);;">  
                          
                        </div>
                        <div class="carousel-img banner-img">                       
                        </div>
                        <div class="carousel-text zoomIn animated">
                          <h1 class="display-4 text-white mb-3 mt-0 mt-lg-5">{{ Institucion.institucion_nombre }}</h1>
        <div class="d-inline-flex text-white">
            <p class="m-0"><a class="text-white" href="/">INICIO</a></p>
            <p class="m-0 px-2">/</p>
            <p class="m-0">SOBRE NOSOTROS</p>
        </div>
                        </div>
                   <!-- </div> -->
                </div>
        </div>

        <!-- About End -->
    <!-- About Start -->
    <div class="container-fluid py-5">
        <div class="container">
          <div class="row justify-content-center animate-box wow zoomIn animated">
                <div class="col-12 col-lg-6 text-center mb-5 ">
                    <h2 class="mt-2 mb-3">Sobre la Carrera</h2>
                    <h1 class="mt-2 mb-3" >{{ Institucion.institucion_nombre }}</h1>
                </div>
            </div>
          </div>
        </div>
 
          <div class="about" style="padding: 0;">
          <div class="gradient-img"></div>
          <div class="container-background banner-image">
            <div class="container">
              <div class="banner-img">
              </div>
                <div class="row align-items-center">
                    <div class="col-md-6">
                        <div class="about-img">
                          <a hrf="">
                            <div class="about-img-1">                 
                                <img src="" alt="Image">
                            </div>
                          </a>
                            <router-link to="/">
                            <div class="about-img-2">
                              <img
                :src="
                  url_api + '/InstitucionUpea/' + Institucion.institucion_logo
                "
                alt="img"
                width=""
                height=""
              />
              &nbsp;
              <h3>{{ Institucion.institucion_nombre }}</h3>
                            </div></router-link>
                            
                        </div>
                    </div>
                    <div class="col-md-6 caja-img-color2">
                        <div class="section-header">
                            <p>CARRERA DE </p>
                            <h2 v-html="Institucion.institucion_nombre"></h2>
                        </div>
                        <div class="about-text">
                              <p class="mb-4" v-html="Institucion.institucion_historia"></p>
                            <a class="btn" style="bottom: 4px;" href="/about">Sobre Nosotros</a>
                        </div>
                    </div>
                </div>
            </div>
          </div>
        </div>                                    


  <div class="secciona">
		<div class="galeria">
			<ul>
				<li><img src="asets/img/about-1.jpg"></li>
        <li><img src="asets/img/about-2.jpg"></li>
         
			</ul>
   </div>
  </div>

              
    <div class="about" style="padding: 0;height: 1000px;">
          <div class="gradient-img"></div>
          <div class="container-background banner-image">
            <div class="container">   
              <section id="main" class="caja-img-color2" style="position: relative;
                    height: 850px;top:30px;">                     
                              <div id="tabs">               
                                <span class="diana" id="uno"></span>
                                <a href="#uno" class="tab-e">MISIÓN</a>
                                <span class="diana" id="dos"></span>
                                <a href="#dos" class="tab-e">VISIÓN</a>
                                <span class="diana" id="tres"></span>
                                <a href="#tres" class="tab-e">OBJETIVOS</a>  
                                <div id="pnl_0" >                    
                                </div>   
                                <div id="pnl_0" style="opacity: 1;">
                                  <div class="section-header">    
                            <h2> MISIÓN</h2>
                        </div>
                        <div class="about-text">
                              <p class="mb-4" v-html="Institucion.institucion_mision"></p>
                        </div>
                                </div>
                                <div id="pnl_1" >
                                  <div class="section-header">    
                            <h2> MISIÓN</h2>
                        </div>
                        <div class="about-text">
                              <p class="mb-4" v-html="Institucion.institucion_mision"></p>
                        </div>
                                </div>

                                <div id="pnl_2">
                                  <div class="section-header">    
                            <h2 >VISIÓN</h2>
                        </div>
                        <div class="about-text">
                              <p class="mb-4" v-html="Institucion.institucion_vision"></p>
                        </div>
                                </div>

                                <div id="pnl_3">
                                  <div class="section-header">    
                            <h2> OBJETIVOS</h2>
                        </div>
                        <div class="about-text">
                              <p class="mb-4" v-html="Institucion.institucion_objetivos"></p>
                           
                        </div>
                                </div>
                                
                              </div>
                      </section>  
     </div>

          </div>
        </div>
        <div class="container-fluid py-5">
        <div class="container">
          <div class="section-header">
                    <p>VIDEO</p>
                    <h2>VISIÓN</h2>   
                </div>

                <div class="row justify-content-center animate-box wow zoomIn animated">

<iframe width="560" height="315" :src="Institucion.institucion_link_video_vision" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
</div>
              </div>
            </div>

            <div class="building">
         <div class="container">
            <div class="row">
               <div class="col-md-12">
                <div class="row align-items-center">
                    <div class="col-md-6" >
                        <div class="about-img" style="text-align: center;">

                            <router-link to="/">
                            <div class="about-img-2" sty>
                              <img style="width: 80%;"
                src="asets/img/logo-tit.png"
              />
              &nbsp;
              <h3 style="text-align: center;">{{ Institucion.institucion_nombre }}</h3>
                            </div></router-link>
                            
                        </div>
                    </div>
                    <div class="col-md-6 caja-img-color2" style="overflow-y: scroll; height: 600px;">

                        <div class="about-text">
                              <p class="mb-4" v-html="Institucion.institucion_sobre_ins"></p>
                            <a class="btn" style="bottom: 4px;" href="/about">Sobre Nosotros</a>
                        </div>
                    </div>
                </div>
               </div>
            </div>
         </div>
      </div>
         <div class="about" style="padding: 0;">   
                                    
            <div class="container-background-upea banner-image-2 mi-imagen">
                 <div class="container">
                <div class="row align-items-center">
 
                    <div class="caja-img-color2">
                        <div class="about-text" style="margin: 20px;">
                            <p class="" v-html="Institucion.institucion_sobre_ins"></p>
                        </div>
                    </div>
                </div>
              </div>
            </div>
          </div> 
          <div class="container">
            <hr size="8px" class="color-main"/><br>
                <div class="row align-items-center">
                    <div class="col-md-6" >
                        <div class="about-img" style="text-align: center;">

                            <router-link to="/">
                            <div class="about-img-2 ">
                              <img style="width: 80%;"
                :src="
                  url_api + '/InstitucionUpea/' + Institucion.institucion_logo
                "
                alt="img"
              />
              &nbsp;
              <h3 style="text-align: center;">{{ Institucion.institucion_nombre }}</h3>
                            </div></router-link>
                            
                        </div>
                    </div>
                    <div class="col-md-6 caja-img-color2">
                        <div class="section-header">
                            <h2>HISTORIA</h2>
                        </div>
                        <div class="about-text">
                              <p class="mb-4" v-html="Institucion.institucion_historia"></p>
                            <a class="btn" style="bottom: 4px;" href="/about">Sobre Nosotros</a>
                        </div>
                    </div>
                </div>
            </div>
    <div class="container-fluid py-5">
        <div class="container">
        <hr size="8px" /><br>         
 <div class="team">
            <div class="container">
                <div class="section-header">
                    <p>CARRERA {{ Institucion.institucion_nombre }}</p>
                    <h2>NUESTRAS AUTORIDADES</h2>
                </div>
                <div class="row">
                  
                  <div class="col-lg-4 col-md-6" v-for="(autoridad, id_aut) of Institucion.autoridad"
            :key="id_aut"
            v-show="true
              //(pag - 1) * NUM_RESULTS <= id_aut && pag * NUM_RESULTS > id_aut
            ">
                        <div class="team-item">
                            <div class="team-img">
                              <img width="400" height="400"
                              :src="
                               url_api +
                             '/InstitucionUpea/Autoridad/' +
                                 autoridad.foto_autoridad " alt="Team Image"/>
                               
                            </div>
                            <div class="team-text">
                                <h2>{{autoridad.nombre_autoridad }}</h2>
                                <p>{{ autoridad.cargo_autoridad }}</p>
                                <div class="team-social">
                                    <a :href="autoridad.twiter_autoridad"><i class="fab fa-twitter"></i></a>
                                    <a :href="autoridad.facebook_autoridad"><i class="fab fa-facebook-f"></i></a>
                                    <a :href="'https://wa.me/+' + autoridad.celular_autoridad"><i class="fab fa-whatsapp"></i></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
            
            <hr size="8px" color="blue"/><br> 
            <!-- Contact Start -->
        <div class="contact">
            <div class="container banner-image">
                <div class="section-header">
                    <p>Contactanos</p>
                    <h2>Póngase en contacto para cualquier consulta</h2>
                </div>
                <div class="row align-items-center">
                    <div class="col-md-4">
                        <div class="contact-info">
                            <div class="contact-icon">
                                <i class="fa fa-map-marker-alt"></i>
                            </div>
                            <div class="contact-text">
                                <h3>Nuestra oficina central</h3>
                                <p>{{ Institucion.institucion_direccion }}</p>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-4">
                      <div class="contact-info">
                            <div class="contact-icon">
                                <i class="fa fa-phone-alt"></i>
                            </div>
                            <div class="contact-text">
                                <h3>LLamadas</h3>
                                <p>{{ Institucion.institucion_celular1 }}</p>
                                <p>{{ Institucion.institucion_celular2 }}</p>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-4">
                      <div class="contact-info">
                            <div class="contact-icon">
                                <i class="fa fa-envelope"></i>
                            </div>
                            <div class="contact-text">
                                <h3>Correo electrónico para obtener información</h3>
                                <p>{{ Institucion.institucion_correo1 }}</p>
                                <p>{{ Institucion.institucion_correo2 }}</p>
                            </div>
                        </div>
                      </div>
                </div>
            </div>
        </div>
        <!-- Contact End -->
            <br>
            <hr size="8px" color="blue"/><br>
            <div class="contact">
            <div class="row justify-content-center">
                <div class="col-12 col-lg-12 text-center mb-5">
                    <h2 class="mt-2 mb-3">Ubicación</h2> 
                </div>
                <div class="col-12 col-lg-12 text-center mb-5">
                    <h3>{{ Institucion.institucion_direccion }}</h3>
                    <iframe
            :src="Institucion.institucion_api_google_map"
            width="85%"
            height="400"
            frameborder="0"
          ></iframe>
                </div>
            </div>
          </div>
        </div>
    </div>
    
    <!-- About End -->

    <section class="galeria">
    <div class="cont_accordion" data-accordion="1">
      <div class="cont_inside">
        <div class="cont_caption">
          <h1>Slide 1</h1>
          <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
        </div>
      </div>
    </div>
    <div class="cont_accordion" data-accordion="2">
      <div class="cont_inside">
        <div class="cont_caption">
          <h1>Slide 2</h1>
        </div>
      </div>
    </div>
    
    <div class="cont_accordion" data-accordion="3">
      <div class="cont_inside">
        <div class="cont_caption">
          <h1>Slide 3</h1>
        </div>
      </div>
    </div>
    
    <div class="cont_accordion" data-accordion="4">
      <div class="cont_inside">
        <div class="cont_caption">
          <h1>Slide 4</h1>
        </div>
      </div>
    </div>
    
    <div class="cont_accordion" data-accordion="5">
      <div class="cont_inside">
        <div class="cont_caption">
          <h1>Slide 5</h1>
        </div>
      </div>
    </div>
    
  </section>
</template>


<script>
import { mapState } from "vuex";
export default {
  name: "AboutView",
  data() {
    return {
      Conv: [],
      Cur: [],
      Serv: [],
      Ofer: [],

      NUM_RESULTS: 3,
      pag: 1,
      pager: 0,
    };
  },
  computed: {
    ...mapState(["Institucion", "url_api"]),
  },
  methods: {
    async getConvocatoriasAll() {
      try {
        let res = await this.axios.get(
          "/api/convocatoriasAll/" + process.env.VUE_APP_ID_CARRERA
        );
        this.Conv = res.data;
        this.pager = this.Institucion.autoridad.length / this.NUM_RESULTS;
        if (this.pager - Math.trunc(this.pager) > 0) {
          this.pager = Math.trunc(this.pager) + 1;
        }
      } catch (error) {
        console.log(error);
      }
    },
    async getCursosAll() {
      try {
        let res = await this.axios.get(
          "/api/cursosAll/" + process.env.VUE_APP_ID_CARRERA
        );
        this.Cur = res.data;
      } catch (error) {
        console.log(error);
      }
    },
    async getServiciosAll() {
      try {
        let res = await this.axios.get(
          "/api/ServicioAll/" + process.env.VUE_APP_ID_CARRERA
        );
        this.Serv = res.data;
      } catch (error) {
        console.log(error);
      }
    },
    async getOfertasAll() {
      try {
        let res = await this.axios.get(
          "/api/OfertasAcademicasAll/" + process.env.VUE_APP_ID_CARRERA
        );
        this.Ofer = res.data;
        this.$store.commit("loading");
      } catch (error) {
        console.log(error);
      }
    },
  },
  created() {
    this.$store.commit("loadOn");
    this.getConvocatoriasAll();
    this.getCursosAll();
    this.getServiciosAll();
    this.getOfertasAll();
  },
};
</script>