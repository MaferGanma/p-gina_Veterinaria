<template>
  <div>
    <div class="fondo">
    <div class="background-fondo-1" style="left: 50%;" >   
      <div>
      <img class="img-log filtro-logo" :src=" url_api + '/InstitucionUpea/' + Institucion.institucion_logo"
                alt="img"
                width="200"
                height="200"                 
              />
            </div>
    </div></div>
  
    <HeaderCustom />
    <router-view />
    <FooterCustom /> 
  </div>
</template>
<script>

import HeaderCustom from "@/components/HeaderCustom.vue";
import FooterCustom from "@/components/FooterCustom.vue";
import { mapState } from "vuex";
export default{
  name: "appWrapper",
  components: {
    HeaderCustom,
    FooterCustom,
  },
  computed: {
    ...mapState([
      "url_api",
      "Institucion",
      "InstitucionUpea",
      "MenuConv",
      "MenuCur",
      "Colors",
      "getter",
      "statusImg",
    ]),
  },
  methods: {
    async getMenuConv() {
      try {
        let res = await this.axios.get("/api/Tipoconvocatorias");
        let filterConv = [];
        res.data.forEach((element) => {
          if (element.tipo_conv_comun_estado == "1") {
            filterConv.push(element);
          }
        });
        this.$store.state.MenuConv = filterConv;
      } catch (error) {
        console.log(error);
      }
    },
    async getMenuCur() {
      try {
        let res = await this.axios.get("/api/TipoCurso");
        let filterCur = [];
        res.data.forEach((element) => {
          if (element.tipo_conv_curso_estado == "1") {
            filterCur.push(element);
          }
        });
        this.$store.state.MenuCur = filterCur;
      } catch (error) {
        console.log(error);
      }
    },
    async getLinks() {
      try {
        let filterLinks = [];
        let res = await this.axios.get(
          "/api/linksIntExtAll/" + process.env.VUE_APP_ID_INSTITUCION
        );
        res.data.forEach((link) => {
          if (link.ei_estado == "1") {
            filterLinks.push(link);
          }
        });
        this.$store.state.Links = filterLinks;
      } catch (error) {
        console.log(error);
      }
    },
    async getInstitucion() {
      try {
        let res = await this.axios.get(
          "/api/InstitucionUPEA/" + process.env.VUE_APP_ID_INSTITUCION
        );
        this.$store.state.Institucion = res.data.Descripcion;
        document
          .querySelector("#ico")
          .setAttribute(
            "href",
            this.url_api +
              "/InstitucionUpea/" +
              this.Institucion.institucion_logo
          );
        document.querySelector("#title-page").innerHTML =
          this.Institucion.institucion_nombre;

        // Colores CSS
        if (this.Institucion.colorinstitucion.length > 0) {
          document.documentElement.style.setProperty(
            "--main-color",
            this.Institucion.colorinstitucion[0].color_primario
          );
          document.documentElement.style.setProperty(
            "--main-color-2",
            this.Institucion.colorinstitucion[0].color_secundario
          );
          document.documentElement.style.setProperty(
            "--main-color-3",
            this.Institucion.colorinstitucion[0].color_terciario
          );
        }
        this.imgheader()
        this.setImages(res.data.Descripcion.portada);
        this.galeria(res.data.Descripcion.portada);
      } catch (error) {
        console.log(error);
        if (error.code == "ERR_NETWORK") {
          this.$router.push("/error_network");
        }
      }
    },
    async getInstitucionUpea() {
      try {
        let res = await this.axios.get(
          "/api/InstitucionUPEA/1"
        );
        this.$store.state.InstitucionUpea = res.data.Descripcion;
      } catch (error) {
        console.log(error);
        if (error.code == "ERR_NETWORK") {
          this.$router.push("/error_network");
        }
      }
    },/*
    galeria(images) {
      if (Object.keys(images).length > 0) {
        let count = images.length;
        let i = 1;
        let img =
          this.url_api + "/InstitucionUpea/Portada/" + images[0].portada_imagen;
        document
          .querySelector(".banner-image-1")
          .setAttribute("style", 'background-image:linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url("' + img + '");background-size:cover;');
          if (i <= count) {
            let img =
              this.url_api +
              "/InstitucionUpea/Portada/" +
              images[i].portada_imagen;
            document
              .querySelector(".banner-image-2")
              .setAttribute("style", 'background-image:linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url("' + img + '");background-size:cover;');
            i++;           
          }if (i <= count) {
            let imga =
              this.url_api +
              "/InstitucionUpea/Portada/" +
              images[i].portada_imagen;
            document
              .querySelector(".banner-image-3")
              .setAttribute("style", 'background-image:linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url("' + imga + '");background-size:cover;');
            i++;           
          }       

      } else {
        document
          .querySelector(".banner-img-back")
          .setAttribute("style", "@/assets/img/BackGround-UPEA-08.jpg");
      }
      this.$store.commit("loading");
    },
    setImages(images) {
      if (Object.keys(images).length > 0) {
        let count = images.length;
        let i = 1;
        let img =
          this.url_api + "/InstitucionUpea/Portada/" + images[0].portada_imagen;
        document
          .querySelector(".banner-img")
          .setAttribute("style", 'background-image:linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url("' + img + '");');

        setInterval(() => {
          if (i <= count) {
            let img =
              this.url_api +
              "/InstitucionUpea/Portada/" +
              images[i - 1].portada_imagen;
            document
              .querySelector(".banner-img")
              .setAttribute("style", 'background-image:linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url("' + img + '");');
            i++;
          } else {
            i = 1;
            let img =
              this.url_api +
              "/InstitucionUpea/Portada/" +
              images[0].portada_imagen;
            document
              .querySelector(".banner-img")
              .setAttribute("style", 'background-image:linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url("' + img + '");');
          }
        }, 5000);
      } else {
        document
          .querySelector(".banner-img")
          .setAttribute("style", "background-image:url(@/assets/img/BackGround-UPEA-08.jpg);");
      }
      this.$store.commit("loading");
    },*/

      imgheader() {
      let img= '/assets/img/img-header2.jpg';
      let img_electronica= '/assets/img/electronica-header2.jpg';
          if(this.Institucion.institucion_id == 26)
          {
            document.querySelector(".banner-img")
            .setAttribute("style", 'background-image:linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url("' + img_electronica + '");');
          }else
          {
            document.querySelector(".banner-img")
            .setAttribute("style", 'background-image:linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url("' + img + '");');
          }
    },
    createdComponents() {
      this.getInstitucion();
      this.getInstitucionUpea();
      this.getMenuConv();
      this.getMenuCur();
      this.getLinks();
    },
  },
  created() {
    this.createdComponents();
  },
};
</script>