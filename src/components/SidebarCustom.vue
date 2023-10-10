<template>
                    <!-- Category List -->
                    <div class="mb-5">
                        <h4 class="text-uppercase mb-4" style="letter-spacing: 5px;">CATEGORÍAS</h4>
                        <div class="bg-white" style="padding: 30px;">
                            <ul class="list-inline m-0">
                                <li class="mb-3 d-flex justify-content-between align-items-center" v-for="(mc, id_mc) of MenuConv" :key="id_mc">
                                    <router-link class="text-dark" :to="'/convocatorias/' + mc.idtipo_conv_comun"
                      @click="$store.commit('clickLink')"><i class="fa fa-angle-right text-primary mr-2"></i>{{ mc.tipo_conv_comun_titulo }}</router-link>
                                    <span class="badge badge-primary badge-pill">{{ contarConv(mc.tipo_conv_comun_titulo) }}</span>
                                </li>
                                <li class="mb-3 d-flex justify-content-between align-items-center" v-for="(mc, id_mc) of MenuCur" :key="id_mc">
                                    <router-link class="text-dark" :to="'/cursos/' + mc.idtipo_curso_otros"
                      @click="$store.commit('clickLink')"><i class="fa fa-angle-right text-primary mr-2"></i>{{ mc.tipo_conv_curso_nombre }}</router-link>
                                    <span class="badge badge-primary badge-pill">{{ contarCur(mc.tipo_conv_curso_nombre) }}</span>
                                </li>
                                <li class="mb-3 d-flex justify-content-between align-items-center">
                                    <router-link class="text-dark" :to="'/servicios'"
                      @click="$store.commit('clickLink')"><i
                                            class="fa fa-angle-right text-primary mr-2"></i>SERVICIOS</router-link>
                                    <span class="badge badge-primary badge-pill">{{ Serv.length }}</span>
                                </li>
                                <li class="mb-3 d-flex justify-content-between align-items-center">
                                    <router-link class="text-dark" :to="'publicaciones'"
                      @click="$store.commit('clickLink')"><i
                                            class="fa fa-angle-right text-primary mr-2"></i>PUBLICACIONES</router-link>
                                    <span class="badge badge-primary badge-pill">{{ Publi.length }}</span>
                                </li>
                                <li class="mb-3 d-flex justify-content-between align-items-center">
                                    <router-link class="text-dark" :to="'/gacetas'"
                      @click="$store.commit('clickLink')"><i
                                            class="fa fa-angle-right text-primary mr-2"></i>GACETAS</router-link>
                                    <span class="badge badge-primary badge-pill">{{ Gac.length }}</span>
                                </li>
                                <li class="mb-3 d-flex justify-content-between align-items-center">
                                    <router-link class="text-dark" :to="'/ofertas'"
                      @click="$store.commit('clickLink')"><i
                                            class="fa fa-angle-right text-primary mr-2"></i>OFERTAS</router-link>
                                    <span class="badge badge-primary badge-pill">{{ Ofer.length }}</span>
                                </li>
                                <li class="mb-3 d-flex justify-content-between align-items-center">
                                    <router-link class="text-dark anim" :to="'/eventos'"
                      @click="$store.commit('clickLink')"><i
                                            class="fa fa-angle-right text-primary mr-2"></i>EVENTOS</router-link>
                                    <span class="badge badge-primary badge-pill">{{ Event.length }}</span>
                                </li>
                                <li class="mb-3 d-flex justify-content-between align-items-center">
                                    <router-link class="text-dark" :to="'/videos/'"
                      @click="$store.commit('clickLink')"><i
                                            class="fa fa-angle-right text-primary mr-2"></i>VIDEOS</router-link>
                                    <span class="badge badge-primary badge-pill">{{ Vid.length }}</span>
                                </li>
                            </ul>
                        </div>
                    </div> 
                    <!-- Recent Post -->
                    <div class="mb-5">
                        <h4 class="text-uppercase mb-4" style="letter-spacing: 5px;">PUBLICACIONES RECIENTES</h4>
                        <div v-if="Publicaciones.length == 0">
                            <h5>No Hay Publicaciones</h5>
                        </div>
                        <div class="public" v-else v-for="(pub, id_pub) of Publicaciones"
                            :key="id_pub">
                        <router-link class="d-flex align-items-center text-decoration-none bg-white mb-3" :to="'/detallePublicacion/' + pub.publicaciones_id"
                      @click="$store.commit('clickLink')">
                            <img class="img-fluid" :src="url_api + '/Publicaciones/' + pub.publicaciones_imagen" alt="" style="width: 60px;">
                            <div class="pl-3">
                                <h6 class="m-1">{{ pub.publicaciones_titulo }}</h6>
                                <small>{{ dmy(pub.publicaciones_fecha) }}</small>
                            </div>
                          </router-link>
                       </div>
                    </div>
                    <!-- Tag Cloud -->
                    <div class="mb-5">
                        <h4 class="text-uppercase mb-4" style="letter-spacing: 5px;">ENLACES EXTERNOS</h4>
                        <div class="d-flex flex-wrap m-n1" >
                            <a v-for="(link, id_link) of Links" :key="id_link" :href="link.ei_link" target="_blank" class="btn btn-primary m-1">{{link.ei_nombre.toUpperCase()}}</a>
                        </div>
                    </div>

       
</template>

<script>
import { mapState } from "vuex";
//import SidebarCustom from "@/components/SidebarCustom.vue";
export default {
  name: "PublicacionesView",
  data() {
    return {
      Publicaciones: [],
      search: "",
      searchGet: false,
      searchValues: [],

      NUM_RESULTS: 4,
      pag: 1,
      pager: 0,

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

      tipo: "",
      Convocatorias: [],
      
    };
  },
  components: {
  //  SidebarCustom,
  },
  computed: {
    ...mapState(["url_api", "getter", "MenuConv", "MenuCur"]),
  },
  methods: {
    
    click_m() {
      this.$store.commit("clickLink");
      this.$store.commit("idEncrypt")
      this.openMenu();
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
    async getPubli() {
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
    async getTipoConv(tipo_conv) {
      try {
        let res = await this.axios.get("/api/Tipoconvocatorias/" + tipo_conv);
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
    async getPublicaciones() {
      try {
        let res = await this.axios.get(
          "/api/PublicacionesAll/" + process.env.VUE_APP_ID_INSTITUCION
        );
        this.Publicaciones = res.data;
        this.pager = this.Publicaciones.length / this.NUM_RESULTS;
        if (this.pager - Math.trunc(this.pager) > 0) {
          this.pager = Math.trunc(this.pager) + 1;
        }
        this.$store.commit("loading");
      } catch (error) {
        console.log(error);
      }
    },
    async getLinks() {
      try {
        let res = await this.axios.get(
          "/api/linksIntExtAll/" + process.env.VUE_APP_ID_INSTITUCION
        );
        this.Links = res.data;
      } catch (error) {
        console.log(error);
      }
    },
    clickBack() {
      this.$store.commit("clickLink");
      this.$router.go(-1);
    },
    dmy(fecha) {
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
    },
    buscar() {
      if (this.search != "") {
        this.searchGet = true;

        this.searchValues = [];
        this.Publicaciones.forEach((pub) => {
          if (
            pub.publicaciones_titulo
              .toUpperCase()
              .includes(this.search.toUpperCase())
          ) {
            this.searchValues.push(pub);
          }
        });
      } else {
        this.searchGet = false;
      }
    },
  },
  mounted() {
    this.$store.commit("loadOn");
    this.getPublicaciones();
    if (this.getter) {
      this.getLinks();
      this.$store.state.getter = false;
    }
  },
  created() {
    this.$store.commit("loadOn");
    this.getPublicaciones();
    this.getLinks();
    this.getConvocatoriasAll();
    this.getCursosAll();
    this.getServiciosAll();
    this.getOfertasAll();
    this.getPubli();
    this.getGacetaAll();
    this.getEventos();
    this.getVideos();
  },
  
};
</script>