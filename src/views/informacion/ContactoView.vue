<template>
  <!-- Header Start -->
  <div class="container-fluid page-header banner-img">
        <div class="container">
            <div class="d-flex flex-column align-items-center justify-content-center" style="min-height: 400px">
                <h3 class="display-4 text-white text-uppercase">CONTACTOS</h3>
                <div class="d-inline-flex text-white">
                    <p class="m-0 text-uppercase"><a class="text-white" href="/">INICIO</a></p>
                    <i class="fa fa-angle-double-right pt-1 px-3"></i>
                </div>
            </div>
        </div>
    </div>
    <!-- Header End -->
   <!-- Feature Start -->
   <div class="container-fluid pb-5" style="padding-top: 100px; position: relative;">
        <div class="container pb-5">
            <div class="row">
                <div class="col-md-4">
                    <div class="d-flex mb-4 mb-lg-0">
                        <div class="d-flex flex-shrink-0 align-items-center justify-content-center bg-primary mr-3" style="height: 100px; width: 100px;">
                            <i class="fa fa-2x fa-envelope text-white"></i>
                        </div>
                        <div class="d-flex flex-column">
                            <h5 class="">Correo Electronico</h5>
                            <p class="m-0 text-white">{{ Institucion.institucion_correo1 }}</p>
                            <p class="m-0 text-white">{{ Institucion.institucion_correo2 }}</p>
                        </div>
                    </div>
                </div>
                <div class="col-md-4">
                    <div class="d-flex mb-4 mb-lg-0">
                        <div class="d-flex flex-shrink-0 align-items-center justify-content-center bg-primary mr-3" style="height: 100px; width: 100px;">
                            <i class="fa fa-2x fa-phone text-white"></i>
                        </div>
                        <div class="d-flex flex-column">
                            <h5 class="">Celular</h5>
                            <p class="m-0 text-white">{{ Institucion.institucion_celular1 }}</p>
                            <p class="m-0 text-white">{{ Institucion.institucion_celular2 }}</p>
                        </div>
                    </div>
                </div>
                <div class="col-md-4">
                    <div class="d-flex mb-4 mb-lg-0">
                        <div class="d-flex flex-shrink-0 align-items-center justify-content-center bg-primary mr-3" style="height: 100px; width: 100px;">
                            <i class="fa fa-2x fa-map-marker text-white"></i>
                        </div>
                        <div class="d-flex flex-column">
                            <h5 class="">Ubicación</h5>
                            <p class="m-0 text-white">{{Institucion.institucion_direccion}}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
          <iframe
            :src="Institucion.institucion_api_google_map"
            width="100%"
            height="600px"
            frameborder="0"
          ></iframe>
    </div>
    <!-- Feature End -->
       
</template>

<script>
import { mapState } from "vuex";
export default {
  data() {
    return {
      sopen: false,
      Links: [],

      m_inicio: false,
      m_conv: false,
      m_cur: false,
      m_mas: false,
      m_link: false,
    };
  },
  computed: {
    ...mapState(["url_api", "MenuConv", "MenuCur", "Institucion", "getter"]),
  },
  methods: {
    click_m() {
      this.$store.commit("clickLink");
      this.$store.commit("idEncrypt")
      this.openMenu();
    },
    openMenu() {
      this.sopen = !this.sopen;
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
  },
  created() {
    this.getLinks();
  },
  mounted() {
    if (this.getter) {
      this.getLinks();
      this.$store.state.getter = false;
    }
  },
};
</script>