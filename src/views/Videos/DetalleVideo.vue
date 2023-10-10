<template>
  <div class="carousel" style="height: calc(50vh - 35px);">
                    <div class="carousel-item" style="height: calc(50vh - 35px);">
                      <div class="carousel-img " style="position: absolute; background-size: cover;background-image: linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url(asets/img/BackGround-UPEA-08.jpg);;">  
                          
                        </div>
                        <div class="carousel-img banner-img">                       
                        </div>
                        <div class="carousel-text">
                          <h1 class="display-4 text-white mb-3 mt-0 mt-lg-5">VIDEO</h1>
      <div class="d-inline-flex text-white">
          <p class="m-0"><a class="text-white" href="/">{{ Institucion.institucion_nombre }}</a></p>
          <p class="m-0 px-2">/</p>
          <p class="m-0">VIDEO</p>
      </div>
                        </div>
                   <!-- </div> -->
                </div>
        </div>
  <div class="container text-center py-5">

        <div class="row">
            <div class="col-lg-8 col-12" v-if="errorGet">
            <h1>Video inexistente</h1>
            </div>
            <div class="col-lg-8" v-else>
                  <h1>Video inexistente</h1>
                <div class="position-relative">              
                  <iframe
                  :src="Video.video_enlace"
                  style="width: 100%; aspect-ratio: 16/9; border-radius: 10px"
                  frameborder="0"
                  allowfullscreen="allowfullscreen"
                />
                <h3 class="m-0">VIDEOS</h3>
                <div class="pt-4 pb-2"> 
                    <h4 class="font-weight-bold">{{ Video.video_titulo}}</h4>
                </div>
                <div class="mb-5">
                    <p v-html="Video.video_breve_descripcion"></p>
                </div>
              </div>                                
            </div>
              
                <div class="col-lg-4 mt-5 mt-lg-0">
                <!-- Search Form Start -->
                <SidebarCustom></SidebarCustom>
            </div>
            </div>
            <!-- Blog Detail End -->

            <!-- Sidebar Start -->
            
            <!-- Sidebar End -->
        </div>
    
    
</template>

<script>
import { mapState } from "vuex";
import SidebarCustom from "@/components/SidebarCustom.vue";
export default {
  name: "detalleVideo",
  data() {
    return {
      Video: {},
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
    async getVideoOne() {
      try {
        let res = await this.axios.get(
          "/api/Videos/" + this.$route.params.idVid
        );
        this.Video = res.data.Descripcion;
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
    this.getVideoOne();
  },
  created() {
    this.$store.commit("loadOn");
    this.getVideoOne();
  },
};
</script>