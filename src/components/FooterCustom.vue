<template>
 <!-- Footer Start -->
 <div class="container-fluid bg-dark text-white-50 py-5 px-sm-3 px-lg-5" style="margin-top: 90px;position:relative">
        <div class="row pt-5">
            <div class="col-lg-3 col-md-6 mb-5">
                <a href="/" class="navbar-brand animacion-titulo">
                    <h2 class="text-primary">{{Institucion.institucion_nombre}}</h2>
                </a>         
                <h6 class="text-white text-uppercase mt-4 mb-3" style="letter-spacing: 5px;">SÍGANOS</h6>
                <div class="d-flex justify-content-start">
                    <a class="btn btn-outline-primary btn-square mr-2" :href="Institucion.institucion_twitter" target="_blank"><i class="fab fa-twitter"></i></a>
                    <a class="btn btn-outline-primary btn-square mr-2" :href="Institucion.institucion_facebook" target="_blank"><i class="fab fa-facebook-f"></i></a>
                    <a class="btn btn-outline-primary btn-square mr-2" :href="Institucion.institucion_youtube" target="_blank"><i class="fab fa-youtube"></i></a>
                </div>
                <div class="d-flex justify-content-start">
                    <img class="filtro-logo animacion-logo-1" :src=" url_api + '/InstitucionUpea/' + Institucion.institucion_logo"
                alt="img"
                width="80"
                height="80"                 
              />
              <img class="filtro-logo animacion-logo-1" :src=" url_api + '/InstitucionUpea/' + InstitucionUpea.institucion_logo"
                alt="img"
                width="80"
                height="80" style="animation-delay: 1s;"                  
              />
                    
                </div>
            </div>
            <div class="col-lg-3 col-md-6 mb-5">
                <h5 class="text-white text-uppercase mb-4 border-bot" style="letter-spacing: 5px;">INSTITUCÍON</h5>
                <div class="d-flex flex-column justify-content-start">
                    <router-link class="text-white-50 mb-2 links-footer" to="/publicaciones"><i class="fa fa-angle-right mr-2"></i>PUBLICACIONES</router-link>
                    <router-link class="text-white-50 mb-2 links-footer" to="/gacetas"><i class="fa fa-angle-right mr-2"></i>GACETAS</router-link>
                    <router-link class="text-white-50 mb-2 links-footer" to="/ofertas"><i class="fa fa-angle-right mr-2"></i>OFERTAS ACADÉMICAS</router-link>
                    <router-link class="text-white-50 mb-2 links-footer" to="/servicios"><i class="fa fa-angle-right mr-2"></i>SERVICIOS</router-link>
                    <router-link class="text-white-50 mb-2 links-footer" to="/ofertas"><i class="fa fa-angle-right mr-2"></i>EVENTOS</router-link>
                    <router-link class="text-white-50 mb-2 links-footer" to="/contacto"><i class="fa fa-angle-right mr-2"></i>CONTACTOS</router-link>
                </div>
            </div>
            <div class="col-lg-3 col-md-6 mb-5">
                <h5 class="text-white text-uppercase mb-4 border-bot" style="letter-spacing: 5px;">CARRERA</h5>
                <div class="d-flex flex-column justify-content-start">
                    <router-link class="text-white-50 mb-2 links-footer"  v-for="(mc, id_mc) of MenuCur" :key="id_mc" :to="'/cursos/' + mc.idtipo_curso_otros"
                                     ><i class="fa fa-angle-right mr-2"></i>{{ mc.tipo_conv_curso_nombre }}</router-link>
                    <router-link class="text-white-50 mb-2 links-footer"  v-for="(mc, id_mc) of MenuConv" :key="id_mc" :to="'/convocatorias/' + mc.idtipo_conv_comun"
                                     ><i class="fa fa-angle-right mr-2"></i>{{ mc.tipo_conv_comun_titulo  }}</router-link>
                </div>
            </div>
            <div class="col-lg-3 col-md-6 mb-5">
                <h5 class="text-white text-uppercase mb-4 border-bot" style="letter-spacing: 5px;">CONTACTOS</h5>
                <p><i class="fa fa-map-marker-alt mr-2 links-footer"></i>{{Institucion.institucion_direccion}}</p>
                <p><i class="fa fa-phone-alt mr-2 links-footer"></i>+591 {{ Institucion.institucion_celular1 }}</p>
                <p><i class="fa fa-phone-alt mr-2 links-footer"></i>+591 {{ Institucion.institucion_celular2 }}</p>
                <p><i class="fa fa-envelope mr-2 links-footer"></i>{{ Institucion.institucion_correo1 }}</p>
                <p><i class="fa fa-envelope mr-2 links-footer"></i>{{ Institucion.institucion_correo2 }}</p>
            </div>
        </div>
    </div>
    <div class="container-fluid bg-dark text-white border-top py-4 px-sm-3 px-md-5" style="border-color: rgba(256, 256, 256, .1) !important;">
        <div class="row">
            <div class="col-lg-4 text-center text-md-left mb-3 mb-md-0">
                <p class="m-0 text-white-50">Copyright &copy; <a href="#">{{ Institucion.institucion_nombre }}</a>
                </p>
            </div>
            <div class="col-lg-4 text-center">
                <a href="https://utic.upea.bo">
                <img class="filtro-logo animacion-logo-sie" src="https://i.imgur.com/RAwBKD1.png"
                alt="img"
                width="80" style="animation-delay: 1s;filter:drop-shadow(2px 4px 6px rgb(5, 28, 200))"                  
              /></a>
            </div>
            <div class="col-lg-4 text-center text-md-right">
                <p class="m-0 text-white-50">Designed by <a href="https://sie.upea.bo">GAO-UTIC</a> |
                    Additional by <a href="https://www.behance.net/aramidanra">Arami</a> 
                </p>
            </div>
        </div>
    </div>
    <!-- Footer End -->

  <footer>
     <!-- Footer Start 
     <div class="footer">
            <div class="container">
                <div class="row">
                    <div class="col-lg-5">
                        <div class="footer-newsletter">
                            <img :src=" url_api + '/InstitucionUpea/' + Institucion.institucion_logo"
                alt="img"
                width="80"
                height="80"
              />
                            <h2>{{Institucion.institucion_nombre}}</h2>
                            <div class="footer-social">
                                        <a :href='"https://wa.me/"+institucion_celular1'><i class="fab fa-whatsapp"></i></a>
                                        <a :href="Institucion.institucion_facebook"><i class="fab fa-facebook-f"></i></a>
                                        <a :href="Institucion.institucion_youtube"><i class="fab fa-youtube"></i></a>     
                                    </div>
                        </div>
                    </div>
                    <div class="col-lg-7">
                        <div class="row">
                            <div class="col-md-6">
                                <div class="footer-contact">
                                    <h2>Nuestras Oficinas</h2>
                                    <p><i class="fa fa-map-marker"></i>{{ Institucion.institucion_direccion }}</p>
                                    <p><i class="fa fa-phone"></i>{{ Institucion.institucion_celular1 }}</p>
                                    <p><i class="fa fa-envelope"></i><a style="color: white;" :href="'mailto:'+Institucion.institucion_correo1">{{ Institucion.institucion_correo1 }}</a></p>   
                                </div>
                            </div>
                            <div class="col-md-6">
                                <div class="footer-link">
                                    <h2>Accesos Directos</h2>
                                    <a class="text-white mb-2" href="/">Inicio</a>
                                    <a class="text-white mb-2" href="/publicaciones">Publicaciones</a>
                                    <a class="text-white mb-2" href="/servicios">Servicios</a>  
                                    <a class="text-white mb-2" href="/eventos">Eventos</a>
                                    <a class="text-white mb-2" href="/ofertas">Ofertas Academicas</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="container copyright">
                <div class="row">
                    <div class="col-md-6">
                        <p>&copy; <a href="#">{{ Institucion.institucion_nombre }}</a>, Todos los derechos reservados.</p>
                    </div>
                    <div class="col-md-6">
  
                        <p>Diseñado por <a href="https://sie.upea.bo/l">@GAO  UPEA-SIE <img src="" alt="" height="30"> </a></p>
                    </div>
                </div>
            </div>
        </div>
        <a href="#" class="back-to-top animacionY"><i class="fa fa-chevron-up"></i></a>
    -->
  </footer>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "footerView",
  computed: {
    ...mapState(["Institucion", "MenuConv", "MenuCur", "url_api", "InstitucionUpea"]),
  },
  methods: {},
};
</script>