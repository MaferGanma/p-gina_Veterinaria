<template>

    <!-- Header Start -->
    <div class="container-fluid page-header banner-img">
        <div class="container">
            <div class="d-flex flex-column align-items-center justify-content-center" style="min-height: 400px">
                <h3 class="display-4 text-white text-uppercase">NUESTRAS AUTORIDADES</h3>
                <div class="d-inline-flex text-white">
                    <p class="m-0 text-uppercase"><a class="text-white" href="/"> {{ Institucion.institucion_nombre }}</a></p>
                </div>
            </div>
        </div>
    </div>
    <!-- Header End -->

  <div class="container-background-5" style="position: relative;">
              <div class="container" style="padding: 20px;">
                <div class="row">
                <div class="col-lg-4 col-md-4 col-sm-6 pb-2" v-for="(autoridad, id_aut) of InstitucionUpea.autoridad"
            :key="id_aut">
                    <div class="team-item bg-white mb-4">
                        <div class="team-img position-relative overflow-hidden">
                            <img class="img-fluid w-100" :src=" url_api + '/InstitucionUpea/Autoridad/' + autoridad.foto_autoridad " alt="">
                            <div class="team-social">
                                <a class="btn btn-outline-primary btn-square" :href="autoridad.twiter_autoridad"><i class="fab fa-twitter"></i></a>
                                <a class="btn btn-outline-primary btn-square" :href="autoridad.facebook_autoridad"><i class="fab fa-facebook-f"></i></a>
                                <a class="btn btn-outline-primary btn-square" :href="'https://wa.me/+'+autoridad.celular_autoridad"><i class="fab fa-whatsapp"></i></a>
                            </div>
                        </div>
                        <div class="text-center py-4">
                            <h5 class="text-truncate" style="white-space: none;">{{autoridad.nombre_autoridad}}</h5>
                            <p class="m-0">{{autoridad.cargo_autoridad}}</p>
                        </div>
                    </div>
                </div>
                <div class="col-lg-4 col-md-4 col-sm-6 pb-2" v-for="(autoridad, id_aut) of Institucion.autoridad"
            :key="id_aut">
                    <div class="team-item bg-white mb-4">
                        <div class="team-img position-relative overflow-hidden">
                            <img class="img-fluid w-100" :src="url_api +
                             '/InstitucionUpea/Autoridad/' +
                                 autoridad.foto_autoridad " alt="">
                           
                        </div>
                        <div class="text-center py-4">
                            <h5 class="" style="white-space: none;">{{autoridad.nombre_autoridad}}</h5>
                            <p class="m-0">{{autoridad.cargo_autoridad}}</p>     
                        </div>
                    </div>
                </div>
            </div>
                <button style="left: 0;" class="btn-primary" @click="$router.go(-1)">
                        <i class=""></i> Volver atrás
                        </button>
            </div>
  </div>
</template>


<script>
import { mapState } from "vuex";
import VuePdfEmbed from "vue-pdf-embed";

import 'vue3-carousel/dist/carousel.css'
import { Carousel, Slide, Pagination, Navigation } from 'vue3-carousel'
export default {
  name: "HomeCustom",
  data() {
    return {
      stado_video:0,

      Conv: 0,
      latestConv: {},
      latestComun: {},
      latestAv: {},

      Cur: 0,
      latestCur: {},
      latestSem: {},

      Serv: [],
      Ofer: [],
      Publi: [],
      Gac: [],
      Event: [],
      Vid: [],

      NUM_RESULTS: 3,
      pag: 1,
      pager: 0,

      NUM_RESULTS_CUR: 3,
      pag_cur: 1,
      pager_cur: 0,

      NUM_RESULTS_PUB: 3,
      pag_pub: 1,
      pager_pub: 0,

      Eventos: [],
      search: "",
      searchGet: false,
      searchValues: [],

      Publicaciones: [],
      
      Ofertas: [],

      Convocatorias: [],
    };
  },
  computed: {
    ...mapState(["url_api", "Institucion", "InstitucionUpea", "MenuConv", "MenuCur", "Links"]),
    /*fecha(){
      const fecha2 = new Date('11/9/2023');
      const fechaActual2 = fecha2.toLocaleDateString();
      console.log(fechaActual2);
      const fecha = new Date();
      const fechaActual = fecha.toLocaleDateString();
      console.log(fechaActual);
      if(fechaActual2 > fechaActual)
      {
        return true
      }else{
        return false
      }
    },*/
  },
  components: {
    VuePdfEmbed,
    Carousel,
    Slide,
    Pagination,
    Navigation,
  },
  methods: {
    
   /* async getTipoCur() {
      try {
        let res = await this.axios.get("/api/TipoCurso/" + 4);
        this.tipo = res.data.Descripcion.tipo_conv_curso_nombre;
        this.getCursos();
      } catch (error) {
        console.log(error);
      }
    },
    async getCursos() {
      try {
        let res = await this.axios.get(
          "/api/cursosAll/" + process.env.VUE_APP_ID_CARRERA
        );
        this.Cursos = [];
        res.data.forEach((cs) => {
          if (
            cs.det_estado == "1" &&
            cs.tipo_curso_otro.tipo_conv_curso_nombre == this.tipo
          ) {
            this.Cursos.push(cs);
          }
        });
        this.pager_cur = this.Cursos.length / this.NUM_RESULTS_CUR;
        if (this.pager_cur - Math.trunc(this.pager_cur) > 0) {
          this.pager_cur = Math.trunc(this.pager_cur) + 1;
        }
        this.$store.commit("loading");
      } catch (error) {
        console.log(error);
      }
    },*/
    async getTipoConv() {
      try {
        let res = await this.axios.get("/api/Tipoconvocatorias/" + 5);
        this.tipo = res.data.Descripcion.tipo_conv_comun_titulo;
        this.getConvocatorias();
      } catch (error) {
        console.log(error);
      }
    },
    async getConvocatorias() {
      try {
        let res = await this.axios.get(
          "/api/convocatoriasAll/" + process.env.VUE_APP_ID_CARRERA
        );
        this.Convocatorias = [];
        res.data.forEach((cca) => {
          if (
            cca.con_estado == "1" &&
            cca.tipo_conv_comun.tipo_conv_comun_titulo == this.tipo
          ) {
            this.Convocatorias.push(cca);
          }
        });
        this.pager = this.Convocatorias.length / this.NUM_RESULTS;
        if (this.pager - Math.trunc(this.pager) > 0) {
          this.pager = Math.trunc(this.pager) + 1;
        }
        this.$store.commit("loading");
      } catch (error) {
        console.log(error);
      }
    },
    async getOfertas() {
      try {
        let res = await this.axios.get(
          "/api/OfertasAcademicasAll/" + process.env.VUE_APP_ID_CARRERA
        );
        this.Ofertas = res.data;
        this.pager = this.Ofertas.length / this.NUM_RESULTS;
        if (this.pager - Math.trunc(this.pager) > 0) {
          this.pager = Math.trunc(this.pager) + 1;
        }
        this.$store.commit("loading");
      } catch (error) {
        console.log(error);
      }
    },
    async getPublicaciones() {
      try {
        let ress = await this.axios.get(
          "/api/PublicacionesAll/" + process.env.VUE_APP_ID_INSTITUCION
        );
        this.Publicaciones = ress.data;
        this.pager_pub = this.Publicaciones.length / this.NUM_RESULTS_PUB;
        if (this.pager_pub - Math.trunc(this.pager_pub) > 0) {
          this.pager_pub = Math.trunc(this.pager_pub) + 1;
        }
        this.$store.commit("loading");
      } catch (error) {
        console.log(error);
      }
    },
    async getEventosAll() {
      try {
        let res = await this.axios.get(
          "/api/eventoAll/" + process.env.VUE_APP_ID_INSTITUCION
        );
        this.Eventos = res.data;
        this.pager = this.Eventos.length / this.NUM_RESULTS;
        if (this.pager - Math.trunc(this.pager) > 0) {
          this.pager = Math.trunc(this.pager) + 1;
        }
        this.$store.commit("loading");
      } catch (error) {
        console.log(error);
      }
    },
    async getConvocatoriasAll() {
      try {
        let res = await this.axios.get(
          "/api/convocatoriasAll/" + process.env.VUE_APP_ID_CARRERA
        );
        this.Conv = res.data;
        this.Conv.forEach((conv) => {
          if (
            conv.tipo_conv_comun.tipo_conv_comun_titulo == "CONVOCATORIAS" &&
            conv.con_estado == "1"
          ) {
            if (Object.keys(this.latestConv).length == 0) {
              this.latestConv = conv;
            }
          } else {
            if (
              conv.tipo_conv_comun.tipo_conv_comun_titulo == "COMUNICADOS" &&
              conv.con_estado == "1"
            ) {
              if (Object.keys(this.latestComun).length == 0) {
                this.latestComun = conv;
              }
            } else {
              if (
                conv.tipo_conv_comun.tipo_conv_comun_titulo == "AVISOS" &&
                conv.con_estado == "1"
              ) {
                if (Object.keys(this.latestAv).length == 0) {
                  this.latestAv = conv;
                }
              }
            }
          }
        });
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
        this.Cur.forEach((cur) => {
          if (
            cur.tipo_curso_otro.tipo_conv_curso_nombre == "CURSOS" &&
            cur.det_estado == "1"
          ) {
            if (Object.keys(this.latestCur).length == 0) {
              this.latestCur = cur;
            }
          } else {
            if (
              cur.tipo_curso_otro.tipo_conv_curso_nombre == "SEMINARIOS" &&
              cur.det_estado == "1"
            ) {
              if (Object.keys(this.latestSem).length == 0) {
                this.latestSem = cur;
              }
            }
          }
        });
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
      } catch (error) {
        console.log(error);
      }
    },
    async getPublicacionesAll() {
      try {
        let res = await this.axios.get(
          "/api/publicacionesAll/" + process.env.VUE_APP_ID_INSTITUCION
        );
        this.Publi = res.data;
      } catch (error) {
        console.log(error);
      }
    },
    async getGacetaAll() {
      try {
        let res = await this.axios.get(
          "/api/gacetaunivAll/" + process.env.VUE_APP_ID_INSTITUCION
        );
        this.Gac = res.data;
      } catch (error) {
        console.log(error);
      }
    },
    async getEventos() {
      try {
        let res = await this.axios.get(
          "/api/eventoAll/" + process.env.VUE_APP_ID_INSTITUCION
        );
        this.Event = res.data;
      } catch (error) {
        console.log(error);
      }
    },
    async getVideos() {
      try {
        let res = await this.axios.get(
          "/api/VideosAll/" + process.env.VUE_APP_ID_INSTITUCION
        );
        this.Vid = res.data;
        this.$store.commit("loading");
      } catch (error) {
        console.log(error);
      }
    },
    async setImage(id, img) {
      try {
        await document
          .querySelector("." + id)
          .setAttribute("style", 'background-image: url("' + img + '");');
      } catch (error) {
        console.log(error);
      }
    },
    contarConv(tipo) {
      if (tipo && this.Conv) {
        let count = 0;
        this.Conv.forEach((conv) => {
          if (conv.tipo_conv_comun.tipo_conv_comun_titulo == tipo) {
            count++;
          }
        });
        return count;
      }
    },
    contarCur(tipo) {
      if (tipo && this.Cur) {
        let count = 0;
        this.Cur.forEach((cur) => {
          if (cur.tipo_curso_otro.tipo_conv_curso_nombre == tipo) {
            count++;
          }
        });
        return count;
      }
    },
    dmy(fecha) {
      if (fecha != undefined) {
        const meses = [
          "enero",
          "febrero",
          "marzo",
          "abril",
          "mayo",
          "junio",
          "julio",
          "agosto",
          "septiembre",
          "octubre",
          "noviembre",
          "diciembre",
        ];
        let fechaCadena = fecha.substr(0, 10);
        let fechaArray = fechaCadena.split("-");
        return (
          fechaArray[2] +
          " de " +
          meses[fechaArray[1] - 1] +
          " de " +
          fechaArray[0]
        );
      }
    },
    scrollInto(elementId) {
      const section = document.querySelector(`#${elementId}`);
      section.scrollIntoView({
        behavior: 'smooth'
      });
    }
  },
  created() {
    this.$store.commit("loadOn");
    this.getConvocatoriasAll();
    this.getCursosAll();
    this.getServiciosAll();
    this.getOfertasAll();
    this.getOfertas();
    this.getPublicaciones();
    this.getPublicacionesAll();
    this.getGacetaAll();
    this.getEventos();
    this.getVideos();
    this.getEventosAll();
    this.getConvocatorias();
    this.getTipoConv();
  },
};
</script>