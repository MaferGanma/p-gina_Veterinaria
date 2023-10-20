<template>
    <!-- Topbar Start -->
    <div class="container-fluid pt-3 d-none d-lg-block" style="background:rgba(0, 0, 0, 0.9);">
        <div class="container">
            <div class="row">
                <div class="col-lg-6 text-center text-lg-left mb-2 mb-lg-0">
                    <div class="d-inline-flex align-items-center">
                      <a :href='"mailto:"+Institucion.institucion_correo1' class="text-white"><p><i class="fa fa-envelope mr-2"></i>{{ Institucion.institucion_correo1 }}</p></a>
                        <p class="text-body px-3">|</p>
                        <a :href='"tel:"+Institucion.institucion_celular1' class="text-white"><p><i class="fa fa-phone-alt mr-2"></i>{{ Institucion.institucion_celular1 }}</p></a>
                    </div>
                </div>
                <div class="col-lg-6 text-center text-lg-right">
                    <div class="d-inline-flex align-items-center">
                        <a class="text-white px-3" target="_blank" :href="Institucion.institucion_facebook">
                            <i class="fab fa-facebook-f textxt" ></i>
                        </a>  
                        <a class="text-white px-3" target="_blank" :href="Institucion.institucion_youtube">
                            <i class="fab fa-youtube"></i>
                        </a>
                        <a class="text-white pl-3" target="_blank" href="http://administracionpaginas.upea.edu.bo/">
                            <i class="fa fa-user" target="_blank"></i>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <!-- Topbar End -->


    <!-- Navbar Start -->
    <div class="container-fluid nav-bar p-0" style="position: absolute;">
        <div class="position-relative p-px-lg-3" style="z-index: 9;">
            <nav class="navbar navbar-expand-lg  navbar-light shadow-lg py-3 py-lg-0 pl-3 pl-lg-5">
              <img class="filtro-logo animacion-logo-1" :src=" url_api + '/InstitucionUpea/' + Institucion.institucion_logo"
                alt="img"
                width="80"
                height="80"                 
              />
              <h1>{{ Institucion.institucion_ }}</h1>
                <button type="button" class="navbar-toggler" data-toggle="collapse" data-target="#navbarCollapse">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse justify-content-between px-3" id="navbarCollapse">
                    <div class="navbar-nav ml-auto py-0">
                        <router-link to="/" class="nav-item nav-link active">INICIO</router-link>      
                        <div class="nav-item dropdown">
                            <a href="#" class="nav-link dropdown-toggle" data-toggle="dropdown">CONVOCATORIAS</a>
                            <div class="dropdown-menu border-0 rounded-0 m-0">
                                <router-link v-for="(mc, id_mc) of MenuConv" :key="id_mc" :to="'/convocatorias/' + mc.idtipo_conv_comun"
                                     @click="click_m()" class="dropdown-item" >{{ mc.tipo_conv_comun_titulo }}</router-link>
                            </div>
                        </div>
                        <div class="nav-item dropdown">
                            <a href="#" class="nav-link dropdown-toggle" data-toggle="dropdown">CURSOS</a>
                            <div class="dropdown-menu border-0 rounded-0 m-0">
                                <router-link v-for="(mc, id_mc) of MenuCur" :key="id_mc" :to="'/cursos/' + mc.idtipo_curso_otros"
                                     @click="click_m()" class="dropdown-item" >{{ mc.tipo_conv_curso_nombre }}</router-link>
                            </div>
                        </div>
                        <div class="nav-item dropdown">
                            <a href="#" class="nav-link dropdown-toggle" data-toggle="dropdown">MÁS</a>
                            <div class="dropdown-menu border-0 rounded-0 m-0">
                                <router-link to="/servicios" class="dropdown-item">SERVICIOS</router-link>
                                <router-link to="/publicaciones" class="dropdown-item">PUBLICACIONES</router-link>
                                <router-link to="/ofertas" class="dropdown-item">OFERTAS ACADÉMICAS</router-link>
                                <router-link to="/gacetas" class="dropdown-item">GACETAS</router-link>
                                <router-link to="/eventos" class="dropdown-item">EVENTOS</router-link>
                                <router-link to="/videos" class="dropdown-item">VIDEOS</router-link>
                            </div>
                        </div>
                        <div class="nav-item dropdown">
                            <a href="#" class="nav-link dropdown-toggle" data-toggle="dropdown">SOBRE NOSOTROS</a>
                            <div class="dropdown-menu border-0 rounded-0 m-0">
                              <router-link to="/historia" class="dropdown-item">NUESTRA HISTORIA</router-link>
                                <router-link to="/misionvision" class="dropdown-item">MISIÓN Y VISIÓN</router-link>
                                <router-link to="/perfil" class="dropdown-item">PERFIL PROFESIONAL</router-link>
                                <router-link to="/plan" class="dropdown-item">PLAN DE ESTUDIOS</router-link>
                                <router-link to="/autoridades" class="dropdown-item">NUESTRAS AUTORIDADES</router-link>
                            </div>
                        </div>
                        <div class="nav-item dropdown">
                            <a href="#" class="nav-link dropdown-toggle" data-toggle="dropdown">LINKS EXTERNOS</a>
                            <div class="dropdown-menu border-0 rounded-0 m-0">
                                <a :href="link.ei_link" target="_blank" :title="link.ei_tipo" class="dropdown-item" v-for="(link, id_link) of Links" :key="id_link"> {{ link.ei_nombre.toUpperCase() }}</a>             
                            </div>
                        </div>
                        <router-link to="/contacto" class="nav-item nav-link">CONTACTOS</router-link>
                    </div>
                </div>
            </nav>
        </div>
    </div>
    
<div class="red">
     <div id="facebook"><a :href="Institucion.institucion_facebook" class="fab fa-facebook-f" target="_blank"></a></div>
     <div id="youtube"><a :href="Institucion.institucion_youtube"  class="fab fa-youtube" target="_blank"></a></div>
     <div id="whatsapp"><a :href="'https://wa.me/'+Institucion.institucion_celular1"  class="fab fa-whatsapp" target="_blank"></a></div>
     <div id="correo"><a :href="'mailto:'+Institucion.institucion_correo1" class="fas fa-envelope-square" ></a></div>
</div>
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
    showSubMenu(id) {
      switch (id) {
        case "m_inicio":
          this.m_inicio = true;
          this.m_conv = false;
          this.m_cur = false;
          this.m_mas = false;
          this.m_link = false;
          break;
        case "m_conv":
          this.m_inicio = false;
          this.m_conv = true;
          this.m_cur = false;
          this.m_mas = false;
          this.m_link = false;
          break;
        case "m_cur":
          this.m_inicio = false;
          this.m_conv = false;
          this.m_cur = true;
          this.m_mas = false;
          this.m_link = false;
          break;
        case "m_mas":
          this.m_inicio = false;
          this.m_conv = false;
          this.m_cur = false;
          this.m_mas = true;
          this.m_link = false;
          break;
        case "m_link":
          this.m_inicio = false;
          this.m_conv = false;
          this.m_cur = false;
          this.m_mas = false;
          this.m_link = true;
          break;

        default:
          console.log("");
          break;
      }
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