<template>

      <!-- Header Start -->
      <div class="container-fluid page-header banner-img">
        <div class="container">
            <div class="d-flex flex-column align-items-center justify-content-center" style="min-height: 400px">
                <h3 class="display-4 text-white text-uppercase"><a style="cursor: pointer" @click="clickBack()">Oferta Académica</a></h3>
                <div class="d-inline-flex text-white">
                    <p class="m-0 text-uppercase"><a class="text-white" href="/">INICIO</a></p>
                    <i class="fa fa-angle-double-right pt-1 px-3"></i>
                    <p class="m-0 text-uppercase">{{ Oferta.oferta_titulo }}</p>
                </div>
            </div>
        </div>
    </div>
    <!-- Header End -->
    <!-- Blog Start -->
    <div class="container-fluid py-5">
        <div class="container py-5">
            <div class="row">
                <div class="col-lg-8">
                    <!-- Blog Detail Start -->
                    <div class="pb-3">
                        <div class="blog-item">
                            <div class="position-relative">
                              <a 
                              :href="url_api + '/Carrera/OfertasAcademicas/' + Oferta.ofertas_imagen ">
                                <img class="img-fluid w-100" :src="
                      url_api +
                      '/Carrera/OfertasAcademicas/' +
                      Oferta.ofertas_imagen
                    "
                    alt="img"
                    style="cursor: zoom-in"></a>
                             <!--   <div class="blog-date">
                                    <h6 class="font-weight-bold mb-n1">01</h6>
                                    <small class="text-white text-uppercase">Jan</small>
                                </div>-->
                            </div>
                        </div>
                        <div class="bg-white mb-3" style="padding: 30px;">
                            <div class="d-flex mb-3">
                                <a class="text-primary text-uppercase text-decoration-none" href="">OFERTA ACADÉMICA</a>
                                <span class="text-primary px-2">|</span>
                                <a class="text-primary text-uppercase text-decoration-none" href="">{{Oferta.ofertas_titulo}}</a>
                            </div>
                            <div class="pt-4 pb-2"> 
                              <b><i class="fa fa-calendar"></i> Fecha Inscriciones</b>
                 <p>{{ dmy(Oferta.ofertas_inscripciones_ini) }} - {{ dmy(Oferta.ofertas_inscripciones_fin) }}</p>
                 <b>Referencias: </b>{{ Oferta.ofertas_referencia }}
                <div class="pt-4 pb-2"> 
                  <i class="fa fa-calendar"></i> <b>Fecha examen</b>: {{ dmy(Oferta.ofertas_fecha_examen) }}
                </div>
                </div>
                <div class="mb-5">
                  <b>Descripción</b>
                  <p v-html="Oferta.ofertas_descripcion"></p>
                </div>
                        </div>
                    </div>
                    <!-- Blog Detail End -->
                </div>
    
                <div class="col-lg-4 mt-5 mt-lg-0">      
                    <SidebarCustom></SidebarCustom>
                </div>
            </div>
        </div>
    </div>
</template>




<script>
import { mapState } from "vuex";
import SidebarCustom from "@/components/SidebarCustom.vue";
export default {
  name: "detalleOferta",
  data() {
    return {
      Oferta: {},
      errorGet: false,
    };
  },
  components: {
    SidebarCustom,
  },
  computed: {
    ...mapState(["url_api","Institucion"]),
  },
  methods: {
    async getOfertaOne() {
      try {
        let res = await this.axios.get(
          "/api/OfertasAcademicas/" + this.$route.params.idOfer
        );
        this.Oferta = res.data.Descripcion;
        this.$store.commit("loading");
      } catch (error) {
        console.log(error);
        if (error.response.status == 500) {
          this.errorGet = true;
          this.$store.commit("loading");
        }
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
          meses[parseInt(fechaArray[1]) - 1] +
          " de " +
          fechaArray[0]
        );
      }
    },
    clickBack() {
      this.$store.commit("clickLink");
      this.$router.go(-1);
    },
  },
  mounted() {
    this.$store.commit("loadOn");
    this.getOfertaOne();
  },
  created() {
    this.$store.commit("loadOn");
    this.getOfertaOne();
  },
};
</script>