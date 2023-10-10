<template>

      <!-- Header Start -->
      <div class="container-fluid page-header banner-img">
        <div class="container">
            <div class="d-flex flex-column align-items-center justify-content-center" style="min-height: 400px">
                <h3 class="display-4 text-white text-uppercase">GACETAS</h3>
                <div class="d-inline-flex text-white">
                    <p class="m-0 text-uppercase"><a class="text-white" href="/">INICIO</a></p>
                    <i class="fa fa-angle-double-right pt-1 px-3"></i>
                </div>
            </div>
        </div>
    </div>
    <!-- Header End -->
    <!-- Booking Start -->
    <div class="container-fluid booking mt-5 pb-5">
        <div class="container pb-5">
          <div class="bg-light shadow" style="padding: 30px;text-align: center;">
                        <h1 class="text-white">{{ Gaceta.length }} Resultados</h1>
            </div>
        </div>
    </div>
<!-- Blog Start -->
    <div class="container-fluid py-5">
        <div class="container py-5">
            <div class="row">
                <div class="col-lg-8">
                  <div v-if="searchGet" class="row pb-3">     
                           <h3 v-if="searchValues.length == 0">
                            No se encontraron resultados.
                          </h3>
                          <h3 v-else> {{ searchValues.length }} Resultados</h3>
                        <div v-else class="col-md-6 mb-4 pb-2" v-for="(gac, id_gac) of searchValues"
                  :key="id_gac">             
                            <div class="blog-item">
                                <div class="position-relative">
                                  <a :href="url_api + '/Gaceta/' + gac.gaceta_documento"
                    target="_blank"
                  >
                                  <vue-pdf-embed class="img-fluid w-100"
                      :source="url_api + '/Gaceta/' + gac.gaceta_documento"
                      :page="1"
                      :disableTextLayer="true"
                    /> </a>              
                                    <div class="blog-date">
                                        <h6 class="font-weight-bold mb-n1">{{ dia(gac.gaceta_fecha) }}</h6>
                                        <small class="text-white text-uppercase">{{ mes(gac.gaceta_fecha) }}</small>
                                    </div>
                                </div>
                                <router-link
                      :to="'/detalleGaceta/' + gac.gaceta_id"
                      @click="$store.commit('clickLink')"
                    >
                                <div class="bg-white p-4">
                                    <div class="d-flex mb-2">
                                        <a class="text-primary text-uppercase text-decoration-none" href=""> GACETA</a>
                                        <span class="text-primary px-2">|</span>
                                        <a class="text-primary text-uppercase text-decoration-none" href=""> {{ gac.gaceta_titulo }}</a>
                                    </div>
                                    <a class="h5 m-0 text-decoration-none" href="">Ver Gaceta</a>
                                </div>
                              </router-link>
                            </div>               
                        </div>                  
                       <!--  <div class="col-12">
                            <nav aria-label="Page navigation">
                                <ul class="pagination pagination-lg justify-content-center bg-white mb-0" style="padding: 30px;">
                                  <li class="page-item ">
                                    <a class="page-link"  href="#"
                    aria-label="Previous"
                    @click.prevent="pag != 1 ? (pag -= 1) : ''">
                                      <span aria-hidden="true">&laquo;</span>
                                      <span class="sr-only">Previous</span>
                                    </a>
                                  </li>
                                  <li class="page-item" v-for="(i, index) of pager" :key="index" :class="[i == pag ? 'active' : '']">
                                    <a class="page-link" href="#" 
                                      @click.prevent="pag = i">{{i}}</a>
                                  </li>
                                 
                                  <li class="page-item">
                                    <a class="page-link" href="#"
                    aria-label="Next"
                    @click.prevent="pag != pager ? (pag += 1) : ''" >
                                      <span aria-hidden="true">&raquo;</span>
                                      <span class="sr-only">Next</span>
                                    </a>
                                  </li>
                                </ul>
                              </nav>
                        </div>-->
                    </div>
                    <div v-else class="row pb-3">     
                      <h3 v-if="Gaceta.length == 0">
                            No se encontraron resultados.
                          </h3>
                        <div v-else class="col-md-6 mb-4 pb-2" v-for="(gac, id_gac) of Gaceta"
                :key="id_gac"
              v-show="true
              //(pag - 1) * NUM_RESULTS <= id_gac &&
                //pag * NUM_RESULTS > id_gac
              ">                 
                      <div class="blog-item">
                                <div class="position-relative">
                                  <a :href="url_api + '/Gaceta/' + gac.gaceta_documento"
                    target="_blank"
                  >
                                  <vue-pdf-embed class="img-fluid w-100"
                      :source="url_api + '/Gaceta/' + gac.gaceta_documento"
                      :page="1"
                      :disableTextLayer="true"
                    /> </a>              
                                    <div class="blog-date">
                                        <h6 class="font-weight-bold mb-n1">{{ dia(gac.gaceta_fecha) }}</h6>
                                        <small class="text-white text-uppercase">{{ mes(gac.gaceta_fecha) }}</small>
                                    </div>
                                </div>
                                <router-link
                      :to="'/detalleGaceta/' + gac.gaceta_id"
                      @click="$store.commit('clickLink')"
                    >
                                <div class="bg-white p-4">
                                    <div class="d-flex mb-2">
                                        <a class="text-primary text-uppercase text-decoration-none" href=""> GACETA</a>
                                        <span class="text-primary px-2">|</span>
                                        <a class="text-primary text-uppercase text-decoration-none" href=""> {{ gac.gaceta_titulo }}</a>
                                    </div>
                                    <a class="h5 m-0 text-decoration-none" href="">Ver Gaceta</a>
                                </div>
                              </router-link>
                            </div>
                           
                        </div>                  
                  <!--    <div class="col-12">
                            <nav aria-label="Page navigation">
                                <ul class="pagination pagination-lg justify-content-center bg-white mb-0" style="padding: 30px;">
                                  <li class="page-item ">
                                    <a class="page-link"  href="#"
                    aria-label="Previous"
                    @click.prevent="pag != 1 ? (pag -= 1) : ''">
                                      <span aria-hidden="true">&laquo;</span>
                                      <span class="sr-only">Previous</span>
                                    </a>
                                  </li>
                                  <li class="page-item" v-for="(i, index) of pager" :key="index" :class="[i == pag ? 'active' : '']">
                                    <a class="page-link" href="#" 
                                      @click.prevent="pag = i">{{i}}</a>
                                  </li>
                                 
                                  <li class="page-item">
                                    <a class="page-link" href="#"
                    aria-label="Next"
                    @click.prevent="pag != pager ? (pag += 1) : ''" >
                                      <span aria-hidden="true">&raquo;</span>
                                      <span class="sr-only">Next</span>
                                    </a>
                                  </li>
                                </ul>
                              </nav>
                        </div>-->
                    </div>
                </div>
    
                <div class="col-lg-4 mt-5 mt-lg-0">

                     <!-- Search Form -->
                     <div class="mb-5">
                        <div class="bg-white" style="padding: 30px;">
                            <div class="input-group">
                                <input type="text" class="form-control p-4" placeholder="Buscar servicio"
                      v-model="search"
                      @keyup="buscar()">
                                <div class="input-group-append">
                                    <span class="input-group-text bg-primary border-primary text-white" @click="buscar()"><i
                                            class="fa fa-search"></i></span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <!-- Author Bio -->
                    <SidebarCustom></SidebarCustom>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>

canvas{
  display: none;
}
</style>


<script>
import { mapState } from "vuex";
import SidebarCustom from "@/components/SidebarCustom.vue";
import VuePdfEmbed from "vue-pdf-embed";
export default {
  name: "GacetaView",
  data() {
    return {
      Gaceta: [],
      search: "",
      searchGet: false,
      searchValues: [],

      NUM_RESULTS: 4,
      pag: 1,
      pager: 0,
    };
  },
  components: {
    SidebarCustom,
    VuePdfEmbed,
  },
  computed: {
    ...mapState(["url_api", "Institucion","getter"]),
  },
  methods: {
    mes(fecha) {
      const meses = [
        "Ene",
        "Feb",
        "Mar",
        "Abr",
        "May",
        "Jun",
        "Jul",
        "Ago",
        "Sep",
        "Oct",
        "Nov",
        "Dic",
      ];
      let fechaCadena = fecha.substr(0, 10);
      let fechaArray = fechaCadena.split("-");
      return (
        meses[fechaArray[1] - 1]
      );
    },
    dia(fecha){
      let fechaCadena = fecha.substr(0, 10);
      let fechaArray = fechaCadena.split("-");
      return (
       fechaArray[2]
      );
    },
    async getGacetaAll() {
      try {
        let res = await this.axios.get(
          "/api/gacetaunivAll/" + process.env.VUE_APP_ID_INSTITUCION
        );
        this.Gaceta = [];
        res.data.forEach((gaceta) => {
          if (gaceta.gaceta_estado == "1") {
            this.Gaceta.push(gaceta);
          }
        });
        this.pager = this.Gaceta.length / this.NUM_RESULTS;
        if (this.pager - Math.trunc(this.pager) > 0) {
          this.pager = Math.trunc(this.pager) + 1;
        }
        this.$store.commit("loading");
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
        this.Gaceta.forEach((gac) => {
          if (
            gac.gaceta_titulo.toUpperCase().includes(this.search.toUpperCase())
          ) {
            this.searchValues.push(gac);
          }
        });
      } else {
        this.searchGet = false;
      }
    },
  },
  mounted() {
    this.$store.commit("loadOn");
    this.getGacetaAll();
  },
  created() {
    this.$store.commit("loadOn");
    this.getGacetaAll();
  },
};
</script>