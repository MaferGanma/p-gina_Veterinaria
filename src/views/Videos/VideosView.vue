<template>

        <!-- Header Start -->
        <div class="container-fluid page-header banner-img">
        <div class="container">
            <div class="d-flex flex-column align-items-center justify-content-center" style="min-height: 400px">
                <h3 class="display-4 text-white text-uppercase">VIDEOS</h3>
                <div class="d-inline-flex text-white">
                    <p class="m-0 text-uppercase"><a class="text-white" href="/">INICIO</a></p>
                    <i class="fa fa-angle-double-right pt-1 px-3"></i>
                </div>
            </div>
        </div>
    </div>
    <!-- Header End -->
    <!-- Booking Start -->
<!-- Blog Start -->
    <div class="container-fluid py-5">
        <div class="container py-5">
            <div class="row">
                <div class="col-lg-8">
                  <div class="" v-if="searchGet">
            <h3 v-if="searchValues == 0">
              No se encontraron resultados.
            </h3>
            <div class="row justify-content-center" v-else>
              <div class="col-12">
                <h3>{{ searchValues.length }} resultados</h3>
                <hr />
              </div>
              <div class="col-lg-12  zoom " v-for="(vid, id_vid) of searchValues"
                :key="id_vid">
                <div class="solid-service-box">
                <iframe
                      :src="vid.video_enlace"
                      frameborder="0"
                      style="border-radius: 5px" width="100%" height="300px" />
                <br>
                <div class="bg-white p-4" style="border-bottom: 1px solid black;">
                                    <div class="d-flex mb-2" >
                                        <a class="text-primary text-uppercase text-decoration-none" href="#"> VIDEO</a>
                                        <span class="text-primary px-2">|</span>
                                        <a class="text-primary text-uppercase text-decoration-none" href="#">{{ vid.video_titulo }}</a>
                                    </div>
                                    <p v-html="vid.video_breve_descripcion"></p>                          
                 </div>
					</div>
				</div>          
            </div>
          </div>
          <div v-else class="row justify-content-center">
              <div v-if="Videos.length == 0">
              <h1>SIN VIDEOS</h1>
            </div>
          <div v-else class="col-lg-12" v-for="(vid, id_vid) of Videos"
              :key="id_vid">
              <div class="solid-service-box">
                <iframe
                      :src="vid.video_enlace"
                      frameborder="0"
                      style="border-radius: 5px" width="100%" height="300px" />
                <br>
                <div class="bg-white p-4" style="border-bottom: 1px solid black;">
                                    <div class="d-flex mb-2" >
                                        <a class="text-primary text-uppercase text-decoration-none" href="#"> VIDEO</a>
                                        <span class="text-primary px-2">|</span>
                                        <a class="text-primary text-uppercase text-decoration-none" href="#">{{ vid.video_titulo }}</a>
                                    </div>
                                    <p v-html="vid.video_breve_descripcion"></p>                          
                 </div>
                          
					</div>
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
  <div class="carousel" style="height: calc(50vh - 35px);">
                    <div class="carousel-item" style="height: calc(50vh - 35px);">
                      <div class="carousel-img " style="position: absolute; background-size: cover;background-image: linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url(asets/img/BackGround-UPEA-08.jpg);;">  
                          
                        </div>
                        <div class="carousel-img banner-img">                       
                        </div>
                        <div class="carousel-text zoomIn animated">
                          <h1 class="display-4 text-white mb-3 mt-0 mt-lg-5">VIDEOS</h1>
      <div class="d-inline-flex text-white">
          <p class="m-0"><a class="text-white" href="/">{{ Institucion.institucion_nombre }}</a></p>
          <p class="m-0 px-2">/</p>
          <p class="m-0">VIDEO</p>
      </div>
                        </div>
                   <!-- </div> -->
                </div>
        </div>
    <div class="container py-5">
        <div class="row">
            <!-- Blog Grid Start -->
            <div class="col-lg-8">
                <div class="">
                  <div class="service-box-section set-bg text-center" data-setbg="">
                    <div class="blog-area pd-top-120 pd-bottom-120">
		<div class="container">
			<div class="">
        <div class="mb-5">
                    <form action="">
                        <div class="input-group">
                            <input type="text" class="form-control form-control-lg" placeholder="Buscar video"
                      v-model="search"
                      @keyup="buscar()"/>
                            <div class="input-group-append">
                                <span class="input-group-text bg-transparent text-primary" @click="buscar()"><i
                                        class="fa fa-search"></i></span>
                            </div>
                        </div>
                    </form>
                </div>
        <div class="" v-if="searchGet">
            <h3 v-if="searchValues == 0">
              No se encontraron resultados.
            </h3>
            <div class="row justify-content-center" v-else>
              <div class="col-12">
                <h3>{{ searchValues.length }} resultados</h3>
                <hr />
              </div>
              <div class="col-lg-12  zoom " v-for="(vid, id_vid) of searchValues"
                :key="id_vid">
                <div class="solid-service-box">
                <iframe
                      :src="vid.video_enlace"
                      frameborder="0"
                      style="border-radius: 5px" width="100%" height="300px" />
                <br>
             
                          <h5>{{ vid.video_titulo }}</h5>
                          <p v-html="vid.video_breve_descripcion"></p>
                          <hr color="black" size="3px">		
					</div>
				</div>          
            </div>
          </div>
          <div v-else class="row justify-content-center">
              <div v-if="Videos.length == 0">
              <h1>SIN VIDEOS</h1>
            </div>
          <div v-else class="col-lg-12" v-for="(vid, id_vid) of Videos"
              :key="id_vid">
              <div class="solid-service-box">
                <iframe
                      :src="vid.video_enlace"
                      frameborder="0"
                      style="border-radius: 5px" width="100%" height="300px" />
                <br>
             
                          <h5>{{ vid.video_titulo }}</h5>
                          <p v-html="vid.video_breve_descripcion"></p>
                          <hr color="black" size="3px">
					</div>
				</div>
      </div>
			</div>
		</div>
	</div>          
                    
                </div>
                
            </div>
        </div>
        <div class="col-lg-4 mt-5 mt-lg-0">
                <!-- Search Form Start --> 
                <SidebarCustom></SidebarCustom>
            </div>
    </div>
  </div>
  

</template>

<script>
import SidebarCustom from "@/components/SidebarCustom.vue";
import { mapState } from "vuex";
export default {
  name: "VideosView",
  data() {
    return {
      Videos: [],
      search: "",
      searchGet: false,
      searchValues: [],

      NUM_RESULTS: 4,
      pag: 1,
      pager: 0,
    };
  },
  computed: {
    ...mapState(["url_api","Institucion"]),
  },
  components: {
    SidebarCustom,
  },
  methods: {
    async getVideosAll() {
      try {
        let res = await this.axios.get(
          "/api/VideosAll/" + process.env.VUE_APP_ID_INSTITUCION
        );
        this.Videos = [];
        res.data.forEach((video) => {
          if (video.video_estado == "1") {
            this.Videos.push(video);
          }
        });
        this.pager = this.Videos.length / this.NUM_RESULTS;
        if (this.pager - Math.trunc(this.pager) > 0) {
          this.pager = Math.trunc(this.pager) + 1;
        }
        this.$store.commit("loading");
      } catch (error) {
        console.log(error);
      }
      this.imgheader();
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
        this.Videos.forEach((vid) => {
          if (
            vid.video_titulo.toUpperCase().includes(this.search.toUpperCase())
          ) {
            this.searchValues.push(vid);
          }
        });
      } else {
        this.searchGet = false;
      }
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
    this.getVideosAll();
  },
  created() {
    this.$store.commit("loadOn");
    this.getVideosAll();
  },
};
</script>