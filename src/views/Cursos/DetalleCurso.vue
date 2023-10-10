<template>
      <!-- Header Start -->
      <div class="container-fluid page-header banner-img">
        <div class="container">
            <div class="d-flex flex-column align-items-center justify-content-center" style="min-height: 400px">
                <h3 class="display-4 text-white text-uppercase"><a style="cursor: pointer" @click="clickBack()">{{
                    Curso.tipo_conv_curso_nombre
                  }}</a></h3>
                <div class="d-inline-flex text-white">
                    <p class="m-0 text-uppercase"><a class="text-white" href="">INICIO</a></p>
                    <i class="fa fa-angle-double-right pt-1 px-3"></i>
                    <p class="m-0 text-uppercase">{{ Curso.det_titulo }}</p>
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
                  :href="url_api + '/Cursos/' + Curso.det_img_portada"
                >
                                <img class="img-fluid w-100" :src="url_api + '/Cursos/' + Curso.det_img_portada"
                    alt="img"
                    style="cursor:zoom-in;" ></a>
                             <!--   <div class="blog-date">
                                    <h6 class="font-weight-bold mb-n1">01</h6>
                                    <small class="text-white text-uppercase">Jan</small>
                                </div>-->
                            </div>
                        </div>
                        <div class="bg-white mb-3" style="padding: 30px;">
                            <div class="d-flex mb-3">
                                <a class="text-primary text-uppercase text-decoration-none" href="">{{Curso.tipo_conv_curso_nombre}}</a>
                                <span class="text-primary px-2">|</span>
                                <a class="text-primary text-uppercase text-decoration-none" href="">{{  Curso.det_titulo  }}</a>
                            </div>
                            <div style="text-align: left;">
                      <p><b>Version:</b> {{ Curso.det_version }}</p> 
                      <p><b>Modalidad:</b> {{ Curso.det_modalidad }}</p> 
                      <hr>
                    <i class="fa fa-book"></i> <b>Descripcion del curso</b>
                      <p v-html="Curso.det_descripcion"></p>
                      <hr>
                     
                        <p><i class="fa fa-map-marker"></i><b>Ubicacion: </b>{{ Curso.det_lugar_curso }}</p>
                  
                  <p><b>Fechas:</b>{{ Curso.det_fecha_ini }} - {{ Curso.det_fecha_fin }} </p>
                  <p>a Hrs. {{ Curso.det_hora_ini }} </p>
                  <hr>
                      <b>Costo de Curso</b>
                      <p><b>Costo:</b> {{ Curso.det_costo }}bs</p>
                      <p><b>Costo Exterior:</b> {{ Curso.det_costo_ext }}bs</p>
                      <p><b>Costo Profesional:</b> {{ Curso.det_costo_profe }}bs</p>
                      <p><b>Carga Horaria:</b>{{ Curso.det_carga_horaria }} hrs</p>
                      <hr>
                      <b>Grupo whatssapp</b>
                      <p>{{ Curso.det_grupo_whatssapp }}</p>
                    <hr>
                    <p><b>Facilitadores:</b></p>  
                      <div class="row">
                    <div clas="col-lg-6" style="flex:0.5" v-for="(fac, id_facilitador) of Curso.facilitadores" :key="id_facilitador">                  
                      <img style="object-fit: cover; height: 40px;"
                              :src="url_api + '/Cursos/' + fac.foto_facilitador"
                                alt="img" />
                                {{ fac.nombre_facilitador}}
                                <br>
                                <p><b>Cargo:</b>  {{ fac.cargo_facilitador }}</p>
                                <p><b>Descripcion:</b>  {{ fac.descripcion_facilitador }}</p>
                                <div class="footer-social">
                                        <a :href='"https://wa.me/"+fac.celular_facilitador'><i class="fab fa-whatsapp" style="margin: 10px;"></i></a>
                                        <a :href='"https://"+fac.facebook_facilitador'><i class="fab fa-facebook-f"></i></a>                               
                                </div>
                    </div>
                  </div>
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
    <!-- Blog End -->
</template>

<script>
import { mapState } from "vuex";
import SidebarCustom from "@/components/SidebarCustom.vue";
export default {
  name: "detalleCurso",
  data() {
    return {
      Curso: {},
      errorGet: false,
    };
  },
  components: { SidebarCustom },
  computed: {
    ...mapState(["url_api","Institucion", "getter"]),
  },
  methods: {
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
    async getCursoOne() {
      try {
        let res = await this.axios.get(
          "/api/cursos/" + this.$route.params.idCur
        );
        this.Curso = res.data.Descripcion;
        this.$store.commit("loading");
      } catch (error) {
        console.log(error);
        if (error.response.status == 500) {
          this.errorGet = true;
          this.$store.commit("loading");
        }
      }
    },
    clickBack() {
      this.$store.commit("clickLink");
      this.$router.go(-1);
    },
  },
  mounted() {
    this.$store.commit("loadOn");
    this.getCursoOne();
  },
  created() {
    this.$store.commit("loadOn");
    this.getCursoOne();
  },
};
</script>