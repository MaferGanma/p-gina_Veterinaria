<template>

    <!-- Header Start -->
    <div class="container-fluid page-header banner-img">
        <div class="container">
            <div class="d-flex flex-column align-items-center justify-content-center" style="min-height: 400px">
                <h3 class="display-4 text-white text-uppercase">SERVICIOS</h3>
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
                        <h1 class="text-white">{{ Servicios.length }} Resultados</h1>
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
                        <div v-else class="col-md-6 mb-4 pb-2" v-for="(serv, id_serv) of searchValues"
                :key="id_serv">
                            <router-link
                            :to="'/detalleServicio/' + serv.serv_id"
                      @click="$store.commit('clickLink')"
                      >
                            <div class="blog-item">
                                <div class="position-relative">
                                    <img class="img-fluid w-100" :src=" url_api + '/Carrera/Servicios/' + serv.serv_imagen"
                          alt="img">
                                    <div class="blog-date">
                                        <h6 class="font-weight-bold mb-n1">{{ dia (serv.serv_registro) }}</h6>
                                        <small class="text-white text-uppercase">{{ mes (serv.serv_registro) }}</small>
                                    </div>
                                </div>
                                <div class="bg-white p-4">
                                    <div class="d-flex mb-2">
                                        <a class="text-primary text-uppercase text-decoration-none" href=""> SERVICIOS</a>
                                        <span class="text-primary px-2">|</span>
                                        <a class="text-primary text-uppercase text-decoration-none" href=""> {{ serv.serv_nombre }}</a>
                                    </div>
                                    <a class="h5 m-0 text-decoration-none" href="">Leer Servicio</a>
                                </div>
                            </div>
                            </router-link>
                        </div>                  
                        <div class="col-12">
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
                        </div>
                    </div>
                    <div v-else class="row pb-3">     
                      <h3 v-if="Servicios.length == 0">
                            No se encontraron resultados.
                          </h3>
                        <div v-else class="col-md-6 mb-4 pb-2" v-for="(serv, id_serv) of Servicios"
              :key="id_serv"
              v-show="
               (pag - 1) * NUM_RESULTS <= id_serv &&
                pag * NUM_RESULTS > id_serv
              "> 
              <router-link
                            :to="'/detalleServicio/' + serv.serv_id"
                      @click="$store.commit('clickLink')"
                      >
                            <div class="blog-item">
                                <div class="position-relative">
                                    <img class="img-fluid w-100" :src=" url_api + '/Carrera/Servicios/' + serv.serv_imagen"
                          alt="img">
                                    <div class="blog-date">
                                        <h6 class="font-weight-bold mb-n1">{{ dia(serv.serv_registro) }}</h6>
                                        <small class="text-white text-uppercase">{{mes (serv.serv_registro) }}</small>
                                    </div>
                                </div>
                                <div class="bg-white p-4">
                                    <div class="d-flex mb-2">
                                        <a class="text-primary text-uppercase text-decoration-none" href=""> SERVICIOS</a>
                                        <span class="text-primary px-2">|</span>
                                        <a class="text-primary text-uppercase text-decoration-none" href=""> {{ serv.serv_nombre }}</a>
                                    </div>
                                    <a class="h5 m-0 text-decoration-none" href="">Leer Servicio</a>
                                </div>
                            </div>
                            </router-link>
                        </div>                  
                        <div class="col-12">
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
                        </div>
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




<script>
import SidebarCustom from "@/components/SidebarCustom.vue";
import { mapState } from "vuex";
import 'vue3-carousel/dist/carousel.css'
import { Carousel, Slide, Pagination, Navigation } from 'vue3-carousel'
export default {
  name: "ServiciosView",
  data() {
    return {
      Servicios: [],
      search: "",
      searchGet: false,
      searchValues: [],

      NUM_RESULTS: 4,
      pag: 1,
      pager: 0,
    };
  },
  components: {
    SidebarCustom,Carousel, Slide, Pagination, Navigation
  },
  computed: {
    ...mapState(["url_api","Institucion"]),
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
    async getServiciosAll() {
      try {
        let res = await this.axios.get(
          "/api/ServicioAll/" + process.env.VUE_APP_ID_CARRERA
        );
        this.Servicios = [];
        res.data.forEach((servicio) => {
          if (servicio.serv_active == "1") {
            this.Servicios.push(servicio);
          }
        });
        this.pager = this.Servicios.length / this.NUM_RESULTS;
        if (this.pager - Math.trunc(this.pager) > 0) {
          this.pager = Math.trunc(this.pager) + 1;
        }
        this.$store.commit("loading");
      } catch (error) {
        console.log(error);
      }
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
        meses[parseInt(fechaArray[1]) - 1] +
        " de " +
        fechaArray[0]
      );
    },
    buscar() {
      if (this.search != "") {
        this.searchGet = true;

        this.searchValues = [];
        this.Servicios.forEach((serv) => {
          if (
            serv.serv_nombre.toUpperCase().includes(this.search.toUpperCase())
          ) {
            this.searchValues.push(serv);
          }
        });
      } else {
        this.searchGet = false;
      }
    },
  },
  mounted() {
    this.$store.commit("loadOn");
    this.getServiciosAll();
  },
  created() {
    this.$store.commit("loadOn");
    this.getServiciosAll();
  },
};
</script>