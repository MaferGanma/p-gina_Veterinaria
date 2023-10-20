<template>

      <!-- Header Start -->
      <div class="container-fluid page-header banner-img">
        <div class="container">
            <div class="d-flex flex-column align-items-center justify-content-center" style="min-height: 400px">
                <h3 class="display-4 text-white text-uppercase"><a style="cursor: pointer" @click="clickBack()">Evento</a></h3>
                <div class="d-inline-flex text-white">
                    <p class="m-0 text-uppercase"><a class="text-white" href="/">INICIO</a></p>
                    <i class="fa fa-angle-double-right pt-1 px-3"></i>
                    <p class="m-0 text-uppercase">{{ Evento.evento_titulo }}</p>
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
                              :href="url_api + '/Eventos/' + Evento.evento_imagen">
                                <img class="img-fluid w-100" :src="url_api + '/Eventos/' + Evento.evento_imagen"
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
                                <a class="text-primary text-uppercase text-decoration-none" href="">EVENTO</a>
                                <span class="text-primary px-2">|</span>
                                <a class="text-primary text-uppercase text-decoration-none" href="">{{Evento.evento_titulo}}</a>
                            </div>
                            <div class="pt-4 pb-2"> 
                  <i class="fa fa-calendar"></i><b>Fecha:</b> {{ dmy(Evento.evento_fecha) }}<br>
                  <i class="fa fa-map-marker"></i> {{ Evento.evento_lugar }}<br>
                  <b>Hora:</b> {{ Evento.evento_hora }}
                  <b>tipo:</b> {{ Evento.evento_tipo}}
                </div>

                <div class="mb-5">
                  <b>Descripcion</b>
                  <p v-html="Evento.evento_descripcion"></p>
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
  name: "detalleEvento",
  data() {
    return {
      Evento: {},
      errorGet: false,

      NUM_RESULTS: 3,
      pag: 1,
      pager: 0,
    };
  },
  components: {
   SidebarCustom,
  },
  computed: {
    ...mapState(["url_api","Institucion"]),
  },
  methods: {
    async getEventoOne() {
      try {
        let res = await this.axios.get(
          "/api/evento/" + this.$route.params.idEv
        );
        this.Evento = res.data.Descripcion;
        this.pager = this.Evento.evento_galeria.length / this.NUM_RESULTS;
        if (this.pager - Math.trunc(this.pager) > 0) {
          this.pager = Math.trunc(this.pager) + 1;
        }
        this.$store.commit("loading");
      } catch (error) {
        console.log(error);
        if (error.response.status == 500) {
          this.errorGet = true;
          this.$store.commit("loading");
        }
      }
      this.imgheader();
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
    imgheader() {
      let img_electronica= '/assets/img/electronica-header2.jpg';
      let img_ambiental = "/assets/img/img-ambiental.jpeg";
      let img_textil = "/assets/img/img-textil.jpg";
      let img_electrica= '/assets/img/img-electricidad.jpg';
      var elemento= document.querySelector(".banner-img");
          //ingenieria electronica
          if(this.Institucion.institucion_id == 26)
          { 
            elemento.setAttribute("style", 'background-image:linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url("' + img_electronica + '");');
          }else
          {
            //ingenieria ambiental
            if(this.Institucion.institucion_id == 30)
            elemento.setAttribute("style", 'background-image:linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url("' + img_ambiental + '");');
            else{
              //ingenieria electrica
              if(this.Institucion.institucion_id ==27)
              {
                elemento.setAttribute("style", 'background-image:linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url("' + img_electrica + '");');
              }else{
                //ingenieria textil
                if(this.Institucion.institucion_id == 29 )
                {
                  elemento.setAttribute("style", 'background-image:linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url("' + img_textil + '");');
                }
              }
            }
          }
    },
  },
  mounted() {
    this.$store.commit("loadOn");
    this.getEventoOne();
  },
  created() {
    this.$store.commit("loadOn");
    this.getEventoOne();
  },
};
</script>