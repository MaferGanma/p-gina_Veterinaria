<template>
       <div class="container-fluid page-header-plan ">
        <div class="container">
            <div class="d-flex flex-column align-items-center justify-content-center" style="min-height: 400px">
                <h3 class="display-4 text-white text-uppercase">PLAN DE ESTUDIOS</h3>
                <div class="d-inline-flex text-white">
                    <p class="m-0 text-uppercase"><a class="text-white" href="/"> {{ Institucion.institucion_nombre }}</a></p>
                </div>
            </div>
        </div>
    </div>
      <div class="container-background-5"  style="position: relative;">
              <div class="container" style="padding: 60px;">
            <hr size="8px" class="color-main"/><br>
                <div class="row align-items-center back_bg zoomIn animated" style="background-color:white">
                    <div class="col-md-12 ">
                        <div class="tab-content card " id="myTabContentMD" style="width:100%;">
                    <a
                :href="
                  url_api +
                  '/InstitucionUpea/' +
                  Institucion.institucion_organigrama
                "
                target="_blank"
              >
                <vue-pdf-embed
                  :source="
                    url_api +
                    '/InstitucionUpea/' +
                    Institucion.institucion_organigrama
                  "
                />
              </a>
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
    ...mapState(["url_api", "Institucion", "MenuConv", "MenuCur", "Links"]),
  },
  components: {
    VuePdfEmbed,
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