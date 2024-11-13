<template>
    <!--INGENIERIA TEXTIL-->
    <div v-if="Institucion.institucion_id==29">
                <!-- Carousel Start -->
                <div id="carousel" class="carousel slide" data-ride="carousel" style="height: calc(100vh - 170px);
    min-height: 400px;">    
                <div class="carousel-inner">
                    <div class="carousel-item active">
                        <img  class="animacion-carousel" src="assets/img/header-textil.jpg" alt="Carousel Image">
                        <div class="carousel-caption">
                          <p class="animated fadeInRight animacion-titulo texto-sub-titulo">BIENBENIDOS A LA CARRERA DE </p>
                            <h1 class="animated fadeInLeft texto-titulo">{{ Institucion.institucion_nombre }}</h1>
                        </div>
                    </div>
                    <div class="carousel-item" v-for="(image, portada_id) of Institucion.portada"
              :key="portada_id">
                        <img class="animacion-carousel" :src="url_api+'/InstitucionUpea/Portada/'+ image.portada_imagen" alt="Carousel Image">
                        <div class="carousel-caption">
                            <p class="animated fadeInRight animacion-titulo texto-sub-titulo">BIENBENIDOS A LA CARRERA DE </p>
                            <h1 class="animated fadeInLeft texto-titulo">{{ Institucion.institucion_nombre }}</h1>
                        </div>
                    </div>

                </div>

                <a class="carousel-control-prev" href="#carousel" role="button" data-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="sr-only">Previous</span>
                </a>
                <a class="carousel-control-next" href="#carousel" role="button" data-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="sr-only">Next</span>
                </a>
            </div>
            <!-- Carousel End -->


            <!-- Feature Start-->
            <div class="feature wow fadeInUp paused" data-wow-delay="0.1s" >
                <div class="container-fluid">
                    <div class="row align-items-center">
                        <div class="col-lg-4 col-md-12 anim-fade-in">
                            <div class="feature-item">
                                <a
                :href="
                  url_api +
                  '/InstitucionUpea/' +
                  Institucion.institucion_organigrama
                "
                target="_blank"
              >
                                <div class="feature-text">
                                    <h3><i class="fa fa-download"></i> DESCARGAR</h3>
                                    <p>Plan de Estudios</p>
                                </div>
                                </a>
                            </div>
                        </div>
                        <div class="col-lg-4 col-md-12 anim-pause-2 anim-fade-in">
                            <router-link to="/gacetas">
                            <div class="feature-item">   
                                <div class="feature-text">
                                    <h3><i class="fa fa-eye"></i> VER</h3>
                                    <p>Gacetas de la Institución</p>
                                </div>
                            </div>
                        </router-link>
                        </div>
                        <div class="col-lg-4 col-md-12 anim-pause-3 anim-fade-in">
                            <div class="feature-item">
                                <router-link to="/videos">
                                <div class="feature-text">
                                    <div class="feature-text">
                                        <h3><i class="fa fa-play"></i> VER</h3>
                                        <p>Videos de de la Institución</p>
                                    </div>
                                </div>
                            </router-link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <!-- Feature End-->


            <!-- About Start -->
            <div class="about wow fadeInUp paused" data-wow-delay="0.1s">
                <div class="container">
                    <div class="row align-items-center">
                        <div class="col-lg-5 col-md-6 anim-fade-in ">
                            <div class="about-img">
                                <img src="assets/img/img-textil.jpg" alt="Image">
                            </div>
                        </div>
                        <div class="col-lg-7 col-md-6 anim-pause-2 anim-fade-in">
                            <div class="section-header text-left ">
                                <p>CARRERA</p>
                                <h2>{{ Institucion.institucion_nombre}}</h2>
                            </div>
                            <div class="about-text" style="background: white;padding:20px">
                                <p class="module line-clamp" v-html="Institucion.institucion_objetivos"></p>         
                                <a class="btn btn-primary" href="/misionvision">Leer Más</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <!-- About End -->


            <!-- Fact Start -->
            <div class="fact paused">
                <div class="container-fluid ">
                    <div class="row counters">
                        <div class="col-md-6 fact-left wow slideInLeft anim-right">
                            <div class="row">
                                <div class="col-6 ">
                                    <div class="fact-icon">
                                        <i class="flaticon-worker"></i>
                                    </div>
                                    <div class="fact-text">
                                        <router-link to="/publicaciones">
                                        <h2 data-toggle="counter-up">+{{Publi.length}}</h2>
                                        <p>Publicaciones</p>
                                        </router-link>
                                    </div>
                                </div>
                                <div class="col-6 ">
                                    <div class="fact-icon">
                                        <i class="flaticon-building"></i>
                                    </div>
                                    <div class="fact-text">
                                        <router-link to="/convocatorias/6">
                                        <h2 data-toggle="counter-up" v-for="(mc, id_mc) of MenuConv" :key="id_mc"><div v-if="mc.idtipo_conv_comun==5">+{{ contarConv(mc.tipo_conv_comun_titulo) }}</div></h2>
                                        <p >Convocatorias</p>
                                        </router-link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-6 fact-right wow slideInRight anim-left">
                            <div class="row">
                                <div class="col-6">
                                    <div class="fact-icon">
                                        <i class="flaticon-address"></i>
                                    </div>
                                    <div class="fact-text">
                                        <router-link to="/cursos/4">
                                        <h2 data-toggle="counter-up" v-for="(mc, id_mc) of MenuCur" :key="id_mc"><div v-if="mc.idtipo_curso_otros==4">+{{ contarCur(mc.tipo_conv_curso_nombre) }}</div></h2>
                                        <p>Cursos</p>
                                        </router-link>
                                    </div>
                                </div>
                                <div class="col-6">
                                    <div class="fact-icon">
                                        <i class="flaticon-crane"></i>
                                    </div>
                                    <div class="fact-text">
                                        <router-link to="/cursos/5">
                                        <h2 data-toggle="counter-up" v-for="(mc, id_mc) of MenuCur" :key="id_mc"><div v-if="mc.idtipo_curso_otros==5">+{{ contarCur(mc.tipo_conv_curso_nombre) }}</div></h2>
                                        <p>Seminarios</p>
                                        </router-link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <!-- Fact End -->


            <!-- Service Start -->
            <div class="service paused" id="novedades">
                <div class="container">
                    <div class="section-header text-center">
                        <p>{{Institucion.institucion_nombre}}</p>
                        <h2 >NUESTROS CONTENIDOS</h2>
                    </div>
                    <div class="row">
                        <div class="col-lg-4 col-md-6 wow fadeInUp anim-fade-in" data-wow-delay="0.1s">
                            <div class="service-item">
                                <div class="service-img">
                                    <img src="assets/img/convocatoria-1.jpg" alt="Image">
                                    <div class="service-overlay">
                                        <p> Ver nuestras convocatorias mas recientes disponibles</p>
                                    </div>
                                </div>
                                <div class="service-text">
                                    <h3>CONVOCATORIAS</h3>
                                    <a class="btn" href="/convocatorias/5" data-lightbox="service">+</a>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-4 col-md-6 wow fadeInUp anim-pause-2 anim-fade-in" data-wow-delay="0.2s">
                            <div class="service-item">
                                <div class="service-img">
                                    <img src="assets/img/cursos-1.jpg" alt="Image">
                                    <div class="service-overlay">
                                        <p>Ver nuestros cursos mas recientes disponibles</p>
                                    </div>
                                </div>
                                <div class="service-text">
                                    <h3>CURSOS</h3>
                                    <a class="btn" href="/cursos/4" data-lightbox="service">+</a>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-4 col-md-6 wow fadeInUp  anim-pause-3 anim-fade-in" data-wow-delay="0.3s">
                            <div class="service-item">
                                <div class="service-img">
                                    <img src="assets/img/seminario-1.jpg" alt="Image">
                                    <div class="service-overlay">
                                        <p>Ver nuestros seminarios mas recientes disponibles</p>
                                    </div>
                                </div>
                                <div class="service-text">
                                    <h3>SEMINARIOS</h3>
                                    <a class="btn" href="/cursos/5" data-lightbox="service">+</a>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-4 col-md-6 wow fadeInUp anim-fade-in" data-wow-delay="0.4s">
                            <div class="service-item">
                                <div class="service-img">
                                    <img src="assets/img/oferta-1.jpg" alt="Image">
                                    <div class="service-overlay">
                                        <p>
                                            Ver nuestras ofertas académicas mas recientes disponibles
                                        </p>
                                    </div>
                                </div>
                                <div class="service-text">
                                    <h3>OFERTAS ACADÉMICAS</h3>
                                    <a class="btn" href="/ofertas" data-lightbox="service">+</a>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-4 col-md-6 wow fadeInUp anim-pause-2 anim-fade-in" data-wow-delay="0.5s">
                            <div class="service-item">
                                <div class="service-img">
                                    <img src="assets/img/eventos-1.jpg" alt="Image">
                                    <div class="service-overlay">
                                        <p>
                                            Ver nuestros eventos
                                        </p>
                                    </div>
                                </div>
                                <div class="service-text">
                                    <h3>EVENTOS</h3>
                                    <a class="btn" href="/eventos" data-lightbox="service">+</a>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-4 col-md-6 wow fadeInUp anim-pause-3 anim-fade-in" data-wow-delay="0.6s">
                            <div class="service-item">
                                <div class="service-img">
                                    <img src="assets/img/videos-1.jpg" alt="Image">
                                    <div class="service-overlay">
                                        <p>
                                            Ver todos los videos
                                        </p>
                                    </div>
                                </div>
                                <div class="service-text">
                                    <h3>VIDEOS</h3>
                                    <a class="btn" href="/videos" data-lightbox="service">+</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <!-- Service End -->


            <!-- Video Start -->
            <div class="video wow fadeIn paused" data-wow-delay="0.1s">
                <div class="container anim-fade-in">
                    <button type="button" v-on:click="abrirvideo()" class="btn-play" data-toggle="modal" data-src="https://www.youtube.com/embed/DWRcNpR6Kdc" data-target="#videoModal">
                        <span></span>
                    </button>
                </div>
            </div>
            
            <div class="modal fade" id="videoModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog" role="document">
                    <div class="modal-content">
                        <div class="modal-body">
                            <button type="button" class="close" v-on:click="closevideo()" data-dismiss="modal" aria-label="Close" v-if="stado_video==0">
                                <span aria-hidden="true">&times;</span>
                            </button>        
                            <!-- 16:9 aspect ratio -->
                            <div class="embed-responsive embed-responsive-16by9">
                                <iframe class="embed-responsive-item" :src="Institucion.institucion_link_video_vision" id="video"  allowscriptaccess="always" allow="autoplay"></iframe>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <!-- Video End -->


            <!-- Team Start -->
            <div class="team paused">
                <div class="container anim-fade-in">
                    <div class="section-header text-center">
                        <p>Nuestras Autoridades</p>
                        <h2>UPEA</h2>
                    </div>
                    <div class="row" style="justify-content:center">
                        <div class="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.1s" v-for="(autoridad, id_aut) of InstitucionUpea.autoridad"
            :key="id_aut">
                            <div class="team-item">
                                <div class="team-img">
                                    <img :src=" url_api + '/InstitucionUpea/Autoridad/' + autoridad.foto_autoridad " alt="Team Image">
                                </div>
                                <div class="team-text">
                                    <h2>{{autoridad.nombre_autoridad}}</h2>
                                    <p>{{autoridad.cargo_autoridad}}</p>
                                </div>
                                <div class="team-social " style="left:-70px">
                                    <a class="social-tw" :href="autoridad.twiter_autoridad"><i class="fab fa-twitter"></i></a>
                                    <a class="social-fb" :href="autoridad.facebook_autoridad"><i class="fab fa-facebook-f"></i></a>
                                    <a class="social-li" :href="'https://wa.me/+'+autoridad.celular_autoridad"><i class="fab fa-whatsapp"></i></a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="section-header text-center">
                        <h2>{{Institucion.institucion_nombre}}</h2>
                    </div>
                    <div class="row" style="justify-content:center">
                        <div class="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.1s" v-for="(autoridad, id_aut) of Institucion.autoridad"
            :key="id_aut">
                            <div class="team-item">
                                <div class="team-img">
                                    <img :src=" url_api + '/InstitucionUpea/Autoridad/' + autoridad.foto_autoridad " alt="Team Image">
                                </div>
                                <div class="team-text">
                                    <h2>{{autoridad.nombre_autoridad}}</h2>
                                    <p>{{autoridad.cargo_autoridad}}</p>
                                </div>
                                <div class="team-social " style="left:-70px">
                                    <a class="social-tw" :href="autoridad.twiter_autoridad"><i class="fab fa-twitter"></i></a>
                                    <a class="social-fb" :href="autoridad.facebook_autoridad"><i class="fab fa-facebook-f"></i></a>
                                    <a class="social-li" :href="'https://wa.me/+'+autoridad.celular_autoridad"><i class="fab fa-whatsapp"></i></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <!-- Team End -->
            

            <!-- FAQs Start -->
            <div class="faqs paused">
                <div class="container">
                    <div class="section-header text-center">
                        <p>Sobre </p>
                        <h2>NOSOTROS</h2>
                    </div>
                    <div class="row anim-fade-in">
                        <div class="col-md-6">
                            <div id="accordion-1">
                                <div class="card wow fadeInLeft" data-wow-delay="0.1s">
                                    <div class="card-header">
                                        <a class="card-link collapsed" data-toggle="collapse" href="#collapseOne">
                                            Ingenieria textil
                                        </a>
                                    </div>
                                    <div id="collapseOne" class="collapse" data-parent="#accordion-1">
                                        <router-link to="/historia">
                                        <div class="card-body">
                                            Hístoria
                                        </div>
                                         </router-link>
                                    </div>
                                </div>
                                <div class="card wow fadeInLeft" data-wow-delay="0.2s">
                                    <div class="card-header">
                                        <a class="card-link collapsed" data-toggle="collapse" href="#collapseTwo">
                                            Nuestros Propósitos
                                        </a>
                                    </div>
                                    <div id="collapseTwo" class="collapse" data-parent="#accordion-1">
                                        <router-link to="/misionvision">
                                            <div class="card-body">
                                                Misión
                                            </div>
                                        </router-link>
                                    </div>
                                    <div id="collapseTwo" class="collapse" data-parent="#accordion-1">
                                        <router-link to="/misionvision">
                                        <div class="card-body">
                                            Visión
                                        </div>
                                    </router-link>
                                    </div>
                                    <div id="collapseTwo" class="collapse" data-parent="#accordion-1">
                                        <router-link to="/misionvision">
                                        <div class="card-body">
                                            Objetivos
                                        </div>
                                    </router-link>
                                    </div>
                                </div>
                                <div class="card wow fadeInLeft" data-wow-delay="0.3s">
                                    <router-link to="/perfil">
                                    <div class="card-header">    
                                        <a class="card-link collapsed" data-toggle="collapse" href="#collapseThree">
                                            Perfil Professional
                                        </a>
                                    </div>
                                </router-link>
                                </div>
                                <div class="card wow fadeInLeft" data-wow-delay="0.4s">
                                    <router-link to="/plan">
                                    <div class="card-header">
                                        <a class="card-link collapsed" data-toggle="collapse" href="#collapseFour">
                                            Plan de estudios
                                        </a>
                                    </div>
                                </router-link>
                                </div>
                                <div class="card wow fadeInLeft" data-wow-delay="0.5s">
                                    <router-link to="/contacto">
                                    <div class="card-header">
                                        <a class="card-link collapsed" data-toggle="collapse" href="#collapseFive">
                                            Contactos
                                        </a>
                                    </div>     
                                    </router-link>             
                                </div>
                            </div>
                        </div>
                        <div class="col-md-6">
                            <div id="accordion-2">
                                <div class="card wow fadeInRight" data-wow-delay="0.1s">
                                    <div class="card-header">
                                        <a class="card-link collapsed" data-toggle="collapse" href="#collapseSix">
                                            Convocatorias
                                        </a>
                                    </div>
                                    <div id="collapseSix" class="collapse" data-parent="#accordion-2">
                                        <router-link to="/convocatorias/2">
                                        <div class="card-body">
                                            Avisos
                                        </div>
                                    </router-link>
                                    </div>
                                    <div id="collapseSix" class="collapse" data-parent="#accordion-2">
                                        <router-link to="/convocatorias/4">
                                        <div class="card-body">
                                            Comunicados
                                        </div>
                                        </router-link>
                                    </div>
                                    <div id="collapseSix" class="collapse" data-parent="#accordion-2">
                                        <router-link to="/convocatorias/5">
                                        <div class="card-body">
                                            Convocatorias
                                        </div>
                                    </router-link>
                                    </div>
                                </div>
                                <div class="card wow fadeInRight" data-wow-delay="0.2s">
                                    <div class="card-header">
                                        <a class="card-link collapsed" data-toggle="collapse" href="#collapseSeven">
                                            Cursos
                                        </a>
                                    </div>
                                    <div id="collapseSeven" class="collapse" data-parent="#accordion-2">
                                        <router-link to="/cursos/5">
                                        <div class="card-body">
                                          Seminarios
                                        </div>
                                    </router-link>
                                    </div>
                                    <div id="collapseSeven" class="collapse" data-parent="#accordion-2">
                                        <router-link to="/cursos/4">
                                        <div class="card-body">
                                            Cursos
                                        </div>
                                    </router-link>
                                    </div>
                                </div>
                                <div class="card wow fadeInRight" data-wow-delay="0.3s">
                                    <router-link to="/ofertas">
                                    <div class="card-header">
                                        <a class="card-link collapsed" data-toggle="collapse" href="#collapseEight">
                                            Ofertas Académicas
                                        </a>
                                    </div>  
                                </router-link>
                                </div>
                                <div class="card wow fadeInRight" data-wow-delay="0.4s">
                                    <router-link to="/eventos">
                                    <div class="card-header">
                                        <a class="card-link collapsed" data-toggle="collapse" href="#collapseNine">
                                            Eventos
                                        </a>
                                    </div>  
                                </router-link>
                                </div>
                                <div class="card wow fadeInRight" data-wow-delay="0.5s">
                                    <router-link to="/videos">
                                    <div class="card-header">
                                        <a class="card-link collapsed" data-toggle="collapse" href="#collapseTen">
                                            Videos
                                        </a>
                                    </div>
                                </router-link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <!-- FAQs End -->


            <!-- Testimonial Start -->
            <div class="testimonial fadeIn paused" data-wow-delay="0.1s">
                <div class="container">
                  <div class="section-header text-center">
                        <p> Nuestras</p>
                        <h2 style="color:white ">Redes Sociales</h2>
                    </div>
                    <div class="row anim-fade-in" style="justify-content:center">
                      <div class="social">
                    <a :href="Institucion.institucion_facebook" class="link facebook" target="_blank"><span class="fab fa-facebook-square"></span></a>
                    <a :href="Institucion.institucion_twitter" class="link twitter" target="blank"><span class="fab fa-twitter"></span></a>
                    <a :href="Institucion.institucion_youtube" class="link youtube" target="blank"><span class="fab fa-youtube"></span></a>
                  </div>
                    </div>
                </div>
            </div>
            <!-- Testimonial End -->


            <!-- Blog Start -->
            <div class="blog paused" >
                <div class="container anim-fade-in" v-if=" 
                          Object.keys(latestConv).length +
                            Object.keys(latestComun).length +
                            Object.keys(latestAv).length >
                          0 ">
                    <div class="section-header text-center">
                        <p>Nuestro Blog</p>
                        <h2>Convocatorias, Avisos y Comunicados</h2>
                    </div>
                    <div class="row">
                        <div class="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.2s" v-if="Object.keys(latestConv).length != 0">
                            <div class="blog-item">
                                <router-link
                              :to="'/detalleConvocatoria/' + latestConv.idconvocatorias"
                              @click="$store.commit('clickLink')">
                                <div class="blog-img">
                                    <img class="img-fluid w-100" :src="url_api + '/Convocatorias/' + latestConv.con_foto_portada" alt="">
                                </div>
                                <div class="blog-title">
                                    <h3>Convocatoria</h3>
                                    <a class="btn" href="">+</a>
                                </div>
                                <div class="blog-meta">
                                    <p>Tipo<a href="">Convocatoria</a></p>
                                </div>
                                <div class="blog-text">
                                    <p>
                                         {{ latestConv.con_titulo }} 
                                    </p>
                                </div>
                            </router-link>
                            </div>
                        </div>
                        <div class="col-lg-4 col-md-6 wow fadeInUp" v-if="Object.keys(latestAv).length != 0">
                            <div class="blog-item">
                                <div class="blog-item">
                                <router-link
                              :to="'/detalleConvocatoria/' + latestAv.idconvocatorias"
                              @click="$store.commit('clickLink')">
                                <div class="blog-img">
                                    <img class="img-fluid w-100" :src="url_api + '/Convocatorias/' + latestAv.con_foto_portada" alt="">
                                </div>
                                <div class="blog-title">
                                    <h3>Comunicado</h3>
                                    <a class="btn" href="">+</a>
                                </div>
                                <div class="blog-meta">
                                    <p>Tipo<a href="">Comunicado</a></p>
                                </div>
                                <div class="blog-text">
                                    <p>
                                         {{ latestAv.con_titulo }} 
                                    </p>
                                </div>
                                </router-link>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.2s" v-if="Object.keys(latestComun).length != 0">
                            <div class="blog-item">
                                <router-link
                              :to="'/detalleConvocatoria/' + latestComun.idconvocatorias"
                              @click="$store.commit('clickLink')">
                                <div class="blog-img">
                                    <img class="img-fluid w-100" :src="url_api + '/Convocatorias/' + latestComun.con_foto_portada" alt="">
                                </div>
                                <div class="blog-title">
                                    <h3>Convocatoria</h3>
                                    <a class="btn" href="">+</a>
                                </div>
                                <div class="blog-meta">
                                    <p>Tipo<a href="">Convocatoria</a></p>
                                </div>
                                <div class="blog-text">
                                    <p>
                                         {{ latestComun.con_titulo }} 
                                    </p>
                                </div>
                            </router-link>
                            </div>
                        </div>
                    </div>
                    <div class="section-header text-center" v-if=" Object.keys(latestCur).length +
                            Object.keys(latestSem).length > 0
                        ">
                        <h2>Cursos y Seminarios</h2>
                    </div>
                    <div class="row" v-if=" Object.keys(latestCur).length +
                            Object.keys(latestSem).length > 0
                        ">
                        <div class="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.2s" v-if="Object.keys(latestCur).length != 0">
                            <router-link
                      :to=" '/detalleCurso/' + latestCur.iddetalle_cursos_academicos"
                              @click="$store.commit('clickLink')">
                            <div class="blog-item">
                                <div class="blog-img">
                                    <img class="img-fluid w-100"  :src="url_api + '/Cursos/' + latestCur.det_img_portada" alt="">                                
                                </div>
                                <div class="blog-title">
                                    <h3>Curso</h3>
                                    <a class="btn" href="">+</a>
                                </div>
                                <div class="blog-meta">
                                    <p>Tipo<a href="">Curso</a></p>
                                </div>
                                <div class="blog-text">
                                    <p>{{ latestCur.det_titulo  }} 
                                    </p>
                                </div>
                            </div>
                            </router-link>
                        </div>
                        <div class="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.2s" v-if="Object.keys(latestSem).length != 0">
                            <router-link
                      :to=" '/detalleCurso/' + latestSem.iddetalle_cursos_academicos"
                              @click="$store.commit('clickLink')">
                            <div class="blog-item">
                                <div class="blog-img">
                                    <img class="img-fluid w-100"  :src="url_api + '/Cursos/' + latestSem.det_img_portada" alt="">                                
                                </div>
                                <div class="blog-title">
                                    <h3>Curso</h3>
                                    <a class="btn" href="">+</a>
                                </div>
                                <div class="blog-meta">
                                    <p>Tipo<a href="">Curso</a></p>
                                </div>
                                <div class="blog-text">
                                    <p>{{ latestSem.det_titulo  }} 
                                    </p>
                                </div>
                            </div>
                            </router-link>
                        </div>
                    </div>
                </div>
            </div>
            <!-- Blog End -->
        </div>
<!--INGENIERIA AMBIENTAL-->
<div v-if="Institucion.institucion_id == 30">
  <div class="container-fluid p-0 border-carousel">
        <div id="header-carousel" class="carousel slide" data-ride="carousel" >
            <div class="carousel-inner" >
                <div class="carousel-item  active">                  
                    <img class="img-portada animacion-carousel" src="assets/img/header-ambiental.jpg" alt="Image" style="height: 700px;">
                    
                    <div class="carousel-caption d-flex flex-column align-items-center justify-content-center">
                        <div class="p-3" style="max-width: 900px;">
                          <h4 class="text-white text-uppercase mb-md-3 animated fadeInRight animacion-titulo texto-sub-titulo">BIENVENIDOS A NUESTRA</h4>
                            <h1 class="display-3 text-white mb-md-4 animated fadeInLeft texto-titulo">{{ Institucion.institucion_nombre }}</h1>
                            <a href="#novedades" @click="scrollInto('novedades')" class="btn btn-primary py-md-3 px-md-5 mt-2 animated fadeInUp">NOVEDADES</a>
                        </div>
                    </div>
                </div>
                <div class="carousel-item paused" v-for="(image, portada_id) of Institucion.portada">
                    <img class="img-portada  animacion-carousel" style="height: 700px;" :src="url_api+'/InstitucionUpea/Portada/'+ image.portada_imagen" alt="Image">
                    <div class="carousel-caption d-flex flex-column align-items-center justify-content-center">
                        <div class="p-3" style="max-width: 900px;"> 
                            <h4 class="text-white text-uppercase mb-md-3 animated fadeInRight texto-sub-titulo">BIENVENIDOS A NUESTRA</h4>
                            <h1 class="display-3 text-white mb-md-4 animated fadeInLeft texto-titulo" >{{ Institucion.institucion_nombre }}</h1>
                            <a href="#novedades" class="btn btn-primary py-md-3 px-md-5 mt-2 animated fadeInUp">NOVEDADES</a>
                        </div>
                    </div>
                </div>
            </div> 
            <div style="background:rgb(0,0,0,0.7);height: 700px; position:absolute;">
                  </div>
                      <a class="carousel-control-prev" href="#header-carousel" data-slide="prev">
                <div class="btn btn-dark" style="width: 45px; height: 45px;">
                    <span class="carousel-control-prev-icon mb-n2"></span>
                </div>
            </a>
            <a class="carousel-control-next" href="#header-carousel" data-slide="next">
                <div class="btn btn-dark" style="width: 45px; height: 45px;">
                    <span class="carousel-control-next-icon mb-n2"></span>
                </div>
            </a>
        </div>        
  </div>
  <div class="container-fluid py-5 paused">
        <div class="container pt-5">
            <div class="row">
                <div class="col-lg-6" style="min-height: 500px;">
                    <div class="position-relative h-100 animated fadeInLeft">
                        <img class="position-absolute w-100 h-100" src="assets/img/ingenieria-ambiental-img1.jpg" style="object-fit: cover;">
                    </div>
                </div>
                <div class="col-lg-6 pt-5 pb-lg-5">
                    <div class="about-text bg-white p-4 p-lg-5 my-lg-5 animated fadeInRight sombra-border line-clamp" style="overflow: hidden;" >
                        <h1 class="mb-3">{{ Institucion.institucion_nombre }}</h1>
                        <div class="module line-clamp">
                              <p v-html="Institucion.institucion_objetivos"></p>
                        </div>                 
                        <router-link to="/misionvision" class="btn btn-primary mt-1">Leer Más</router-link>
                    </div>
                </div>
            </div>
        </div>
  </div>
    <!-- Service Start -->
    <div class="container-fluid py-5 paused">
        <div class="container pt-5 pb-3">
            <div class="text-center mb-3 pb-3">
                <h6 class="text-primary text-uppercase animacion-titulo anim-fade-in" style="letter-spacing: 5px;">{{Institucion.institucion_nombre}}</h6>
                <h1>MISIÓN Y VISIÓN</h1>
            </div>
            <div class="row">
              <div class="col-lg-6 col-md-6 mb-4 anim-pause-2 anim-fade-in caja-animacion">
                    <div class="service-item bg-white text-center mb-2 py-5 px-4 sombra-border anim-vision">
                        <i class="fa fa-2x fa-bullseye mx-auto mb-4"></i>
                        <h5 class="mb-2">MISIÓN</h5>
                        <p class="m-0" v-html="Institucion.institucion_mision"></p>
                    </div>
                </div>
                <div class="col-lg-6 col-md-6 anim-pause-3 mb-4 anim-fade-in">
                    <div class="service-item bg-white text-center mb-2 py-5 px-4 sombra-border anim-vision">
                        <i class="fa fa-2x fa-eye mx-auto mb-4"></i>
                        <h5 class="mb-2"> VISIÓN</h5>
                        <p class="m-0" v-html="Institucion.institucion_vision"></p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  <div class="container-fluid bg-registration-ambiental py-5 paused" style="margin: 90px 0;">
        <div class="container py-5">
            <div class="row align-items-center">
              <div class="col-md-4 anim-fade-in" >
                  <router-link to="/publicaciones">
                    <div class="d-flex mb-4 mb-lg-0">
                        <div class="d-flex flex-shrink-0 align-items-center justify-content-center bg-dark-1 mr-3" style="height: 100px; width: 100px;">
                            <i class="fa fa-2x fa-sticky-note "></i>
                        </div>
                        <div class="d-flex flex-column">
                            <h5 class="" style="color: white">Publicaciones</h5>
                            <p class="m-0">Vea lo último en nuestras publicaciones</p>
                        </div>
                    </div>
                  </router-link>
                </div>
                <div class="col-md-4 anim-fade-in">
                  <router-link to="/convocatorias/4">
                    <div class="d-flex mb-4 mb-lg-0">
                        <div class="d-flex flex-shrink-0 align-items-center justify-content-center bg-dark-1 mr-3" style="height: 100px; width: 100px;">
                            <i class="fa fa-2x fa-envelope "></i>
                        </div>
                        <div class="d-flex flex-column">
                            <h5 class="" style="color: white;">Comunicados</h5>
                            <p class="m-0">Vea lo último en nuestros comunicados</p>
                        </div>
                    
                    </div>
                  </router-link>
                </div>
                <div class="col-md-4 anim-fade-in">
                  <router-link to="/servicios">
                    <div class="d-flex mb-4 mb-lg-0">
                        <div class="d-flex flex-shrink-0 align-items-center justify-content-center bg-dark-1 mr-3" style="height: 100px; width: 100px;">
                            <i class="fa fa-2x fa-bookmark"></i>
                        </div>
                        <div class="d-flex flex-column">
                            <h5 class="" style="color: white">Servicios</h5>
                            <p class="m-0">Brindando los mejores sericios de nuestra carrera                      
                            </p>
                        </div>
                    </div>
                  </router-link>
                </div>
            </div>
        </div>
  </div>
  <div class="container-fluid py-5 paused" id="novedades">
        <div class="container pt-5 pb-3">
            <div class="text-center mb-3 pb-3">
                <h6 class="text-primary text-uppercase animacion-titulo" style="letter-spacing: 5px;">Categorías</h6>
                <h1>Nuestros Contenidos</h1>
            </div>
            <div class="row">          
                <div class="col-lg-4 col-md-6 mb-4 anim-pause animated fadeInUp">
                  <router-link to="/convocatorias/5">
                    <div class="destination-item position-relative overflow-hidden mb-2">
                        <img class="img-fluid" src="assets/img/convocatoria-1.jpg" alt="">
                        <a class="destination-overlay text-white text-decoration-none" href="">
                            <h5 class="text-white">Convocatorias</h5>
                            <span v-for="(mc, id_mc) of MenuConv" :key="id_mc"><div v-if="mc.idtipo_conv_comun==5">+{{ contarConv(mc.tipo_conv_comun_titulo) }}</div></span>
                        </a>
                    </div>
                    </router-link>
                </div>
                <div class="col-lg-4 col-md-6 mb-4 anim-pause-2 animated fadeInUp">
                  <router-link to="/cursos/4">
                    <div class="destination-item position-relative overflow-hidden mb-2">
                        <img class="img-fluid" src="assets/img/cursos-1.jpg" alt="">
                        <a class="destination-overlay text-white text-decoration-none" href="">
                            <h5 class="text-white">Cursos</h5>
                            <span v-for="(mc, id_mc) of MenuCur" :key="id_mc"><div v-if="mc.idtipo_curso_otros==4">+{{ contarCur(mc.tipo_conv_curso_nombre) }}</div></span>
                        </a>
                    </div>
                  </router-link>
                </div>
                <div class="col-lg-4 col-md-6 mb-4 anim-pause-3 animated fadeInUp">
                  <router-link to="/cursos/5">
                    <div class="destination-item position-relative overflow-hidden mb-2">
                        <img class="img-fluid" src="assets/img/seminario-1.jpg" alt="">
                        <a class="destination-overlay text-white text-decoration-none" href="">
                            <h5 class="text-white">Seminarios</h5>
                            <span v-for="(mc, id_mc) of MenuCur" :key="id_mc"><div v-if="mc.idtipo_curso_otros==5">+{{ contarCur(mc.tipo_conv_curso_nombre) }}</div></span>
                        </a>
                    </div>
                  </router-link>
                </div>
                <div class="col-lg-4 col-md-6 mb-4 anim-pause  animated fadeInDown">
                  <router-link to="/ofertas">
                    <div class="destination-item position-relative overflow-hidden mb-2">
                        <img class="img-fluid" src="assets/img/oferta-1.jpg" alt="">
                        <a class="destination-overlay text-white text-decoration-none" href="">
                            <h5 class="text-white">Ofertas Académicas</h5>
                            <span>+ {{ Ofer.length }}</span>
                        </a>
                    </div>
                  </router-link>
                </div>
                <div class="col-lg-4 col-md-6 mb-4 anim-pause-2 animated fadeInDown">
                  <router-link to="/eventos">
                    <div class="destination-item position-relative overflow-hidden mb-2">
                        <img class="img-fluid" src="assets/img/eventos-1.jpg" alt="">
                        <a class="destination-overlay text-white text-decoration-none" href="">
                            <h5 class="text-white">Eventos</h5>
                            <span>+ {{  Event.length  }}</span>
                        </a>
                    </div>
                  </router-link>
                </div>
                <div class="col-lg-4 col-md-6 mb-4 anim-pause-3 animated fadeInDown">
                  <router-link to="videos">
                    <div class="destination-item position-relative overflow-hidden mb-2">
                        <img class="img-fluid" src="assets/img/videos-1.jpg" alt="">
                        <a class="destination-overlay text-white text-decoration-none" href="">
                            <h5 class="text-white">Videos</h5>
                            <span>+ {{ Vid.length }}</span>
                        </a>
                    </div>
                  </router-link>
                </div>
            </div>
        </div>
    </div>
    <!-- Destination Start -->


  
                 <!-- Video Start -->
                 <div class="video wow fadeIn" data-wow-delay="0.1s">
                <div class="container">
                    <button type="button" class="btn-play" data-toggle="modal" data-src="https://www.youtube.com/embed/DWRcNpR6Kdc" data-target="#videoModal">
                        <span></span>
                    </button>
                </div>
            </div>
            
            <div class="modal fade" id="videoModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog" role="document">
                    <div class="modal-content">
                        <div class="modal-body">
                            <button type="button" class="close" v-on:click="closevideo()" data-dismiss="modal" aria-label="Close" v-if="stado_video==0">
                                <span aria-hidden="true">&times;</span>
                            </button>        
                            <!-- 16:9 aspect ratio -->
                            <div class="embed-responsive embed-responsive-16by9">
                                <iframe class="embed-responsive-item" :src="Institucion.institucion_link_video_vision" id="video"  allowscriptaccess="always" allow="autoplay"></iframe>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <!-- Video End -->

    <!-- Service End -->

    <!-- Team Start -->
    <div class="container-fluid py-5 paused">
        <div class="container pt-5 pb-3">
            <div class="text-center mb-3 pb-3">
                <h6 class="text-primary text-uppercase animacion-titulo anim-fade-in" style="letter-spacing: 5px;">AUTORIDADES</h6>
                <h1>Nuestras Autoridades</h1>
            </div>
            <div class="row">
                <div class="col-lg-4 col-md-4 col-sm-6 pb-2 anim-fade-in" v-for="(autoridad, id_aut) of InstitucionUpea.autoridad"
            :key="id_aut">
                    <div class="team-item bg-white mb-4">
                        <div class="team-img position-relative overflow-hidden">
                            <img class="img-fluid w-100" :src=" url_api + '/InstitucionUpea/Autoridad/' + autoridad.foto_autoridad " alt="">
                            <div class="team-social">
                                <a class="btn btn-outline-primary btn-square" :href="autoridad.twiter_autoridad"><i class="fab fa-twitter"></i></a>
                                <a class="btn btn-outline-primary btn-square" :href="autoridad.facebook_autoridad"><i class="fab fa-facebook-f"></i></a>
                                <a class="btn btn-outline-primary btn-square" :href="'https://wa.me/+'+autoridad.celular_autoridad"><i class="fab fa-whatsapp"></i></a>
                            </div>
                        </div>
                        <div class="text-center py-4">
                            <h5 class="text-truncate">{{autoridad.nombre_autoridad}}</h5>
                            <p class="m-0">{{autoridad.cargo_autoridad}}</p>
                        </div>
                    </div>
                </div>
                <div class="col-lg-4 col-md-4 col-sm-6 pb-2 anim-fade-in" v-for="(autoridad, id_aut) of Institucion.autoridad"
            :key="id_aut">
                    <div class="team-item bg-white mb-4">
                        <div class="team-img position-relative overflow-hidden">
                            <img class="img-fluid w-100" :src="url_api +
                             '/InstitucionUpea/Autoridad/' +
                                 autoridad.foto_autoridad " alt="">
                            <div class="team-social">
                                <a class="btn btn-outline-primary btn-square" :href="autoridad.twiter_autoridad"><i class="fab fa-twitter"></i></a>
                                <a class="btn btn-outline-primary btn-square" :href="autoridad.facebook_autoridad"><i class="fab fa-facebook-f"></i></a>
                                <a class="btn btn-outline-primary btn-square" :href="'https://wa.me/+'+autoridad.celular_autoridad"><i class="fab fa-whatsapp"></i></a>
                            </div>
                        </div>
                        <div class="text-center py-4">
                            <h5 class="text-truncate">{{autoridad.nombre_autoridad}}</h5>
                            <p class="m-0">{{autoridad.cargo_autoridad}}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <!-- Team End -->
    <div class="fondo-ambiental"></div>
    <!-- Blog Convocatoria -->
    <div class="container-fluid py-5 paused " v-if=" 
                          Object.keys(latestConv).length +
                            Object.keys(latestComun).length +
                            Object.keys(latestAv).length >
                          0 ">
        <div class="container pt-5 pb-3">
            <div class="text-center mb-3 pb-3">
                <h6 class="text-primary text-uppercase animacion-titulo anim-fade-in" style="letter-spacing: 5px;">NUESTRO BLOG</h6>
                <h1>CONVOCATORIAS, COMUNICADOS Y AVISOS DISPONIBLES</h1>
            </div>
            <div class="row pb-3">
                <div class="col-lg-4 col-md-6 mb-4 pb-2 anim-fade-in" v-if="Object.keys(latestConv).length != 0">
                    <div class="blog-item" >
                      <router-link
                              :to="'/detalleConvocatoria/' + latestConv.idconvocatorias"
                              @click="$store.commit('clickLink')">
                        <div class="position-relative">
                            <img class="img-fluid w-100" :src="url_api + '/Convocatorias/' + latestConv.con_foto_portada" alt="">
                            <div class="blog-date">
                                <h6 class="font-weight-bold mb-n1">{{dia(latestConv.con_fecha_inicio)}}</h6>
                                <small class="text-white text-uppercase">{{mes(latestConv.con_fecha_inicio)}}</small>
                            </div>
                        </div>
                        <div class="bg-white p-4">
                            <div class="d-flex mb-2">
                                <a class="text-primary text-uppercase text-decoration-none" href="">CONVOCATORIA</a>
                                <span class="text-primary px-2">|</span>
                                <a class="text-primary text-uppercase text-decoration-none" href="">{{ latestConv.con_titulo }}</a>
                            </div>
                            <a class="h5 m-0 text-decoration-none" href=""><p v-html="latestConv.con_descripcion"></p></a>
                        </div>
                        </router-link>
                    </div>
                </div>
                <div class="col-lg-4 col-md-6 mb-4 pb-2 anim-pause-2 anim-fade-in" v-if="Object.keys(latestAv).length != 0">
                    <div class="blog-item" >
                      <router-link
                              :to="'/detalleConvocatoria/' + latestAv.idconvocatorias"
                              @click="$store.commit('clickLink')">
                        <div class="position-relative">
                            <img class="img-fluid w-100" :src="url_api + '/Convocatorias/' + latestAv.con_foto_portada" alt="">
                            <div class="blog-date">
                                <h6 class="font-weight-bold mb-n1">{{ dia(latestAv.con_fecha_inicio) }}</h6>
                                <small class="text-white text-uppercase">{{ mes(latestAv.con_fecha_inicio)}}</small>
                            </div>
                        </div>
                        <div class="bg-white p-4">
                            <div class="d-flex mb-2">
                                <a class="text-primary text-uppercase text-decoration-none" href="">AVISO</a>
                                <span class="text-primary px-2">|</span>
                                <a class="text-primary text-uppercase text-decoration-none" href="">{{ latestAv.con_titulo }}</a>
                            </div>
                            <a class="h5 m-0 text-decoration-none" href=""><p v-html="latestAv.con_descripcion"></p></a>
                        </div>
                        </router-link>
                    </div>
                </div>
                <div class="col-lg-4 col-md-6 mb-4 pb-2 anim-pause-3 anim-fade-in" v-if="Object.keys(latestComun).length != 0">
                    <div class="blog-item" >
                      <router-link
                              :to="'/detalleConvocatoria/' + latestComun.idconvocatorias"
                              @click="$store.commit('clickLink')" >
                        <div class="position-relative">
                            <img class="img-fluid w-100" :src="url_api + '/Convocatorias/' + latestComun.con_foto_portada" alt="">
                            <div class="blog-date">
                                <h6 class="font-weight-bold mb-n1">{{ dia(latestComun.con_fecha_inicio) }}</h6>
                                <small class="text-white text-uppercase">{{ mes(latestComun.con_fecha_inicio) }}</small>
                            </div>
                        </div>
                        <div class="bg-white p-4">
                            <div class="d-flex mb-2">
                                <a class="text-primary text-uppercase text-decoration-none" href="">COMUNICADO</a>
                                <span class="text-primary px-2">|</span>
                                <a class="text-primary text-uppercase text-decoration-none" href="">{{ latestComun.con_titulo }}</a>
                            </div>
                            <a class="h5 m-0 text-decoration-none" href=""><p v-html="latestComun.con_descripcion"></p></a>
                        </div>
                        </router-link>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <!-- Blog end -->
    <!-- Blog cursos -->
    <div class="container-fluid fondo-ambiental py-5 paused" v-if=" Object.keys(latestCur).length +
                            Object.keys(latestSem).length > 0
                        ">
        <div class="container pt-5 pb-3">
            <div class="text-center mb-3 pb-3">
                <h1>CURSOS Y SEMINARIOS DISPONIBLES</h1>
            </div>
            <div class="row pb-3">
                <div class="col-lg-4 col-md-6 mb-4 pb-2  anim-fade-in" v-if="Object.keys(latestCur).length != 0" >
                    <div class="blog-item" >
                      <router-link
                      :to=" '/detalleCurso/' + latestCur.iddetalle_cursos_academicos"
                              @click="$store.commit('clickLink')">
                        <div class="position-relative">
                            <img class="img-fluid w-100"  :src="url_api + '/Cursos/' + latestCur.det_img_portada" alt="">
                            <div class="blog-date">
                                <h6 class="font-weight-bold mb-n1">{{dia(latestCur.det_fecha_ini)}}</h6>
                                <small class="text-white text-uppercase">{{mes(latestCur.det_fecha_ini)}}</small>
                            </div>
                        </div>
                        <div class="bg-white p-4">
                            <div class="d-flex mb-2">
                                <a class="text-primary text-uppercase text-decoration-none" href="">CURSO</a>
                                <span class="text-primary px-2">|</span>
                                <a class="text-primary text-uppercase text-decoration-none" href="">{{ latestCur.det_titulo  }}</a>
                            </div>
                            <a class="h5 m-0 text-decoration-none" href=""><p v-html="latestCur.det_descripcion"></p></a>
                        </div>
                        </router-link>
                    </div>
                </div>
                <div class="col-lg-4 col-md-6 mb-4 pb-2 anim-pause-2 anim-fade-in"  v-if="Object.keys(latestSem).length != 0">
                  <div class="blog-item">
                      <router-link
                      :to=" '/detalleCurso/' + latestSem.iddetalle_cursos_academicos"
                              @click="$store.commit('clickLink')">
                        <div class="position-relative">
                            <img class="img-fluid w-100"  :src="url_api + '/Cursos/' + latestSem.det_img_portada" alt="">
                            <div class="blog-date">
                               <h6 class="font-weight-bold mb-n1">{{dia(latestCur.det_fecha_ini)}}</h6>
                                <small class="text-white text-uppercase">{{mes(latestCur.det_fecha_ini)}}</small>
                            </div>
                        </div>
                        <div class="bg-white p-4">
                            <div class="d-flex mb-2">
                                <a class="text-primary text-uppercase text-decoration-none" href="">CURSO</a>
                                <span class="text-primary px-2">|</span>
                                <a class="text-primary text-uppercase text-decoration-none" href="">{{ latestSem.det_titulo  }}</a>
                            </div>
                            <a class="h5 m-0 text-decoration-none" href=""><p v-html="latestSem.det_descripcion"></p></a>
                        </div>
                        </router-link>
                    </div>
                </div>
            </div>
        </div>
    </div>


</div>
<!--MEDICINA VETERINARIA-->
<div v-if="Institucion.institucion_id == 20">
  <div class="container-fluid p-0 border-carousel">
        <div id="header-carousel" class="carousel slide" data-ride="carousel" >
            <div class="carousel-inner" >
                <div class="carousel-item  active">                  
                    <img class="img-portada animacion-carousel" src="assets/img/veterinaria-img1.jpg" alt="Image" style="height: 700px;">
                    
                    <div class="carousel-caption d-flex flex-column align-items-center justify-content-center">
                        <div class="p-3" style="max-width: 900px;">
                          <h4 class="text-white text-uppercase mb-md-3 animated fadeInRight animacion-titulo texto-sub-titulo">BIENVENIDOS A LA CARRERA DE</h4>
                            <h1 class="display-3 text-white mb-md-4 animated fadeInLeft texto-titulo">{{ Institucion.institucion_nombre }}</h1>
                            <a href="#novedades" @click="scrollInto('novedades')" class="btn btn-primary py-md-3 px-md-5 mt-2 animated fadeInUp">NOVEDADES</a>
                        </div>
                    </div>
                </div>
                <div class="carousel-item paused" v-for="(image, portada_id) of Institucion.portada">
                    <img class="img-portada  animacion-carousel" style="height: 700px;" :src="url_api+'/InstitucionUpea/Portada/'+ image.portada_imagen" alt="Image">
                    <div class="carousel-caption d-flex flex-column align-items-center justify-content-center">
                        <div class="p-3" style="max-width: 900px;"> 
                            <h4 class="text-white text-uppercase mb-md-3 animated fadeInRight texto-sub-titulo">BIENVENIDOS A NUESTRA</h4>
                            <h1 class="display-3 text-white mb-md-4 animated fadeInLeft texto-titulo" >{{ Institucion.institucion_nombre }}</h1>
                            <a href="#novedades" class="btn btn-primary py-md-3 px-md-5 mt-2 animated fadeInUp">NOVEDADES</a>
                        </div>
                    </div>
                </div>
            </div> 
            <div style="background:rgb(0,0,0,0.7);height: 700px; position:absolute;">
                  </div>
                      <a class="carousel-control-prev" href="#header-carousel" data-slide="prev">
                <div class="btn btn-dark" style="width: 45px; height: 45px;">
                    <span class="carousel-control-prev-icon mb-n2"></span>
                </div>
            </a>
            <a class="carousel-control-next" href="#header-carousel" data-slide="next">
                <div class="btn btn-dark" style="width: 45px; height: 45px;">
                    <span class="carousel-control-next-icon mb-n2"></span>
                </div>
            </a>
        </div>        
  </div>
  <div class="container-fluid py-5 paused">
        <div class="container pt-5">
            <div class="row">
                <div class="col-lg-6" style="min-height: 500px;">
                    <div class="position-relative h-100 animated fadeInLeft">
                        <img class="position-absolute w-100 h-100" src="assets/img/veterinaria-img1.jpg" style="object-fit: cover;">
                    </div>
                </div>
                <div class="col-lg-6 pt-5 pb-lg-5">
                    <div class="about-text bg-white p-4 p-lg-5 my-lg-5 animated fadeInRight sombra-border line-clamp" style="overflow: hidden;" >
                        <h1 class="mb-3">{{ Institucion.institucion_nombre }}</h1>
                        <div class="module line-clamp">
                              <p v-html="Institucion.institucion_objetivos"></p>
                        </div>                 
                        <router-link to="/misionvision" class="btn btn-primary mt-1">Leer Más</router-link>
                    </div>
                </div>
            </div>
        </div>
  </div>
    <!-- Service Start -->
    <div class="container-fluid py-5 paused">
        <div class="container pt-5 pb-3">
            <div class="text-center mb-3 pb-3">
                <h6 class="text-primary text-uppercase animacion-titulo anim-fade-in" style="letter-spacing: 5px;">{{Institucion.institucion_nombre}}</h6>
                <h1>MISIÓN Y VISIÓN</h1>
            </div>
            <div class="row">
              <div class="col-lg-6 col-md-6 mb-4 anim-pause-2 anim-fade-in caja-animacion">
                    <div class="service-item bg-white text-center mb-2 py-5 px-4 sombra-border anim-vision">
                        <i class="fa fa-2x fa-bullseye mx-auto mb-4"></i>
                        <h5 class="mb-2">MISIÓN</h5>
                        <p class="m-0" v-html="Institucion.institucion_mision"></p>
                    </div>
                </div>
                <div class="col-lg-6 col-md-6 anim-pause-3 mb-4 anim-fade-in">
                    <div class="service-item bg-white text-center mb-2 py-5 px-4 sombra-border anim-vision">
                        <i class="fa fa-2x fa-eye mx-auto mb-4"></i>
                        <h5 class="mb-2"> VISIÓN</h5>
                        <p class="m-0" v-html="Institucion.institucion_vision"></p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  <div class="container-fluid bg-registration-ambiental py-5 paused" style="margin: 90px 0;">
        <div class="container py-5">
            <div class="row align-items-center">
              <div class="col-md-4 anim-fade-in" >
                  <router-link to="/publicaciones">
                    <div class="d-flex mb-4 mb-lg-0">
                        <div class="d-flex flex-shrink-0 align-items-center justify-content-center bg-dark-1 mr-3" style="height: 100px; width: 100px;">
                            <i class="fa fa-2x fa-sticky-note "></i>
                        </div>
                        <div class="d-flex flex-column">
                            <h5 class="" style="color: white">Publicaciones</h5>
                            <p class="m-0">Vea lo último en nuestras publicaciones</p>
                        </div>
                    </div>
                  </router-link>
                </div>
                <div class="col-md-4 anim-fade-in">
                  <router-link to="/convocatorias/4">
                    <div class="d-flex mb-4 mb-lg-0">
                        <div class="d-flex flex-shrink-0 align-items-center justify-content-center bg-dark-1 mr-3" style="height: 100px; width: 100px;">
                            <i class="fa fa-2x fa-envelope "></i>
                        </div>
                        <div class="d-flex flex-column">
                            <h5 class="" style="color: white;">Comunicados</h5>
                            <p class="m-0">Vea lo último en nuestros comunicados</p>
                        </div>
                    
                    </div>
                  </router-link>
                </div>
                <div class="col-md-4 anim-fade-in">
                  <router-link to="/servicios">
                    <div class="d-flex mb-4 mb-lg-0">
                        <div class="d-flex flex-shrink-0 align-items-center justify-content-center bg-dark-1 mr-3" style="height: 100px; width: 100px;">
                            <i class="fa fa-2x fa-bookmark"></i>
                        </div>
                        <div class="d-flex flex-column">
                            <h5 class="" style="color: white">Servicios</h5>
                            <p class="m-0">Brindando los mejores sericios de nuestra carrera                      
                            </p>
                        </div>
                    </div>
                  </router-link>
                </div>
            </div>
        </div>
  </div>
  <div class="container-fluid py-5 paused" id="novedades">
        <div class="container pt-5 pb-3">
            <div class="text-center mb-3 pb-3">
                <h6 class="text-primary text-uppercase animacion-titulo" style="letter-spacing: 5px;">Categorías</h6>
                <h1>Nuestros Contenidos</h1>
            </div>
            <div class="row">          
                <div class="col-lg-4 col-md-6 mb-4 anim-pause animated fadeInUp">
                  <router-link to="/convocatorias/5">
                    <div class="destination-item position-relative overflow-hidden mb-2">
                        <img class="img-fluid" src="assets/img/convocatoria-1.jpg" alt="">
                        <a class="destination-overlay text-white text-decoration-none" href="">
                            <h5 class="text-white">Convocatorias</h5>
                            <span v-for="(mc, id_mc) of MenuConv" :key="id_mc"><div v-if="mc.idtipo_conv_comun==5">+{{ contarConv(mc.tipo_conv_comun_titulo) }}</div></span>
                        </a>
                    </div>
                    </router-link>
                </div>
                <div class="col-lg-4 col-md-6 mb-4 anim-pause-2 animated fadeInUp">
                  <router-link to="/cursos/4">
                    <div class="destination-item position-relative overflow-hidden mb-2">
                        <img class="img-fluid" src="assets/img/cursos-1.jpg" alt="">
                        <a class="destination-overlay text-white text-decoration-none" href="">
                            <h5 class="text-white">Cursos</h5>
                            <span v-for="(mc, id_mc) of MenuCur" :key="id_mc"><div v-if="mc.idtipo_curso_otros==4">+{{ contarCur(mc.tipo_conv_curso_nombre) }}</div></span>
                        </a>
                    </div>
                  </router-link>
                </div>
                <div class="col-lg-4 col-md-6 mb-4 anim-pause-3 animated fadeInUp">
                  <router-link to="/cursos/5">
                    <div class="destination-item position-relative overflow-hidden mb-2">
                        <img class="img-fluid" src="assets/img/seminario-1.jpg" alt="">
                        <a class="destination-overlay text-white text-decoration-none" href="">
                            <h5 class="text-white">Seminarios</h5>
                            <span v-for="(mc, id_mc) of MenuCur" :key="id_mc"><div v-if="mc.idtipo_curso_otros==5">+{{ contarCur(mc.tipo_conv_curso_nombre) }}</div></span>
                        </a>
                    </div>
                  </router-link>
                </div>
                <div class="col-lg-4 col-md-6 mb-4 anim-pause  animated fadeInDown">
                  <router-link to="/ofertas">
                    <div class="destination-item position-relative overflow-hidden mb-2">
                        <img class="img-fluid" src="assets/img/oferta-1.jpg" alt="">
                        <a class="destination-overlay text-white text-decoration-none" href="">
                            <h5 class="text-white">Ofertas Académicas</h5>
                            <span>+ {{ Ofer.length }}</span>
                        </a>
                    </div>
                  </router-link>
                </div>
                <div class="col-lg-4 col-md-6 mb-4 anim-pause-2 animated fadeInDown">
                  <router-link to="/eventos">
                    <div class="destination-item position-relative overflow-hidden mb-2">
                        <img class="img-fluid" src="assets/img/eventos-1.jpg" alt="">
                        <a class="destination-overlay text-white text-decoration-none" href="">
                            <h5 class="text-white">Eventos</h5>
                            <span>+ {{  Event.length  }}</span>
                        </a>
                    </div>
                  </router-link>
                </div>
                <div class="col-lg-4 col-md-6 mb-4 anim-pause-3 animated fadeInDown">
                  <router-link to="videos">
                    <div class="destination-item position-relative overflow-hidden mb-2">
                        <img class="img-fluid" src="assets/img/videos-1.jpg" alt="">
                        <a class="destination-overlay text-white text-decoration-none" href="">
                            <h5 class="text-white">Videos</h5>
                            <span>+ {{ Vid.length }}</span>
                        </a>
                    </div>
                  </router-link>
                </div>
            </div>
        </div>
    </div>
    <!-- Destination Start -->


  
                 <!-- Video Start -->
                 <div class="video wow fadeIn" data-wow-delay="0.1s">
                <div class="container">
                    <button type="button" class="btn-play" data-toggle="modal" data-src="https://www.youtube.com/embed/DWRcNpR6Kdc" data-target="#videoModal">
                        <span></span>
                    </button>
                </div>
            </div>
            
            <div class="modal fade" id="videoModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog" role="document">
                    <div class="modal-content">
                        <div class="modal-body">
                            <button type="button" class="close" v-on:click="closevideo()" data-dismiss="modal" aria-label="Close" v-if="stado_video==0">
                                <span aria-hidden="true">&times;</span>
                            </button>        
                            <!-- 16:9 aspect ratio -->
                            <div class="embed-responsive embed-responsive-16by9">
                                <iframe class="embed-responsive-item" :src="Institucion.institucion_link_video_vision" id="video"  allowscriptaccess="always" allow="autoplay"></iframe>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <!-- Video End -->

    <!-- Service End -->

    <!-- Team Start -->
    <div class="container-fluid py-5 paused">
        <div class="container pt-5 pb-3">
            <div class="text-center mb-3 pb-3">
                <h6 class="text-primary text-uppercase animacion-titulo anim-fade-in" style="letter-spacing: 5px;">AUTORIDADES</h6>
                <h1>Nuestras Autoridades</h1>
            </div>
            <div class="row">
                <div class="col-lg-4 col-md-4 col-sm-6 pb-2 anim-fade-in" v-for="(autoridad, id_aut) of InstitucionUpea.autoridad"
            :key="id_aut">
                    <div class="team-item bg-white mb-4">
                        <div class="team-img position-relative overflow-hidden">
                            <img class="img-fluid w-100" :src=" url_api + '/InstitucionUpea/Autoridad/' + autoridad.foto_autoridad " alt="">
                            <div class="team-social">
                                <a class="btn btn-outline-primary btn-square" :href="autoridad.twiter_autoridad"><i class="fab fa-twitter"></i></a>
                                <a class="btn btn-outline-primary btn-square" :href="autoridad.facebook_autoridad"><i class="fab fa-facebook-f"></i></a>
                                <a class="btn btn-outline-primary btn-square" :href="'https://wa.me/+'+autoridad.celular_autoridad"><i class="fab fa-whatsapp"></i></a>
                            </div>
                        </div>
                        <div class="text-center py-4">
                            <h5 class="text-truncate">{{autoridad.nombre_autoridad}}</h5>
                            <p class="m-0">{{autoridad.cargo_autoridad}}</p>
                        </div>
                    </div>
                </div>
                <div class="col-lg-4 col-md-4 col-sm-6 pb-2 anim-fade-in" v-for="(autoridad, id_aut) of Institucion.autoridad"
            :key="id_aut">
                    <div class="team-item bg-white mb-4">
                        <div class="team-img position-relative overflow-hidden">
                            <img class="img-fluid w-100" :src="url_api +
                             '/InstitucionUpea/Autoridad/' +
                                 autoridad.foto_autoridad " alt="">
                            <div class="team-social">
                                <a class="btn btn-outline-primary btn-square" :href="autoridad.twiter_autoridad"><i class="fab fa-twitter"></i></a>
                                <a class="btn btn-outline-primary btn-square" :href="autoridad.facebook_autoridad"><i class="fab fa-facebook-f"></i></a>
                                <a class="btn btn-outline-primary btn-square" :href="'https://wa.me/+'+autoridad.celular_autoridad"><i class="fab fa-whatsapp"></i></a>
                            </div>
                        </div>
                        <div class="text-center py-4">
                            <h5 class="text-truncate">{{autoridad.nombre_autoridad}}</h5>
                            <p class="m-0">{{autoridad.cargo_autoridad}}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <!-- Team End -->
    <div class="fondo-ambiental"></div>
    <!-- Blog Convocatoria -->
    <div class="container-fluid py-5 paused " v-if=" 
                          Object.keys(latestConv).length +
                            Object.keys(latestComun).length +
                            Object.keys(latestAv).length >
                          0 ">
        <div class="container pt-5 pb-3">
            <div class="text-center mb-3 pb-3">
                <h6 class="text-primary text-uppercase animacion-titulo anim-fade-in" style="letter-spacing: 5px;">NUESTRO BLOG</h6>
                <h1>CONVOCATORIAS, COMUNICADOS Y AVISOS DISPONIBLES</h1>
            </div>
            <div class="row pb-3">
                <div class="col-lg-4 col-md-6 mb-4 pb-2 anim-fade-in" v-if="Object.keys(latestConv).length != 0">
                    <div class="blog-item" >
                      <router-link
                              :to="'/detalleConvocatoria/' + latestConv.idconvocatorias"
                              @click="$store.commit('clickLink')">
                        <div class="position-relative">
                            <img class="img-fluid w-100" :src="url_api + '/Convocatorias/' + latestConv.con_foto_portada" alt="">
                            <div class="blog-date">
                                <h6 class="font-weight-bold mb-n1">{{dia(latestConv.con_fecha_inicio)}}</h6>
                                <small class="text-white text-uppercase">{{mes(latestConv.con_fecha_inicio)}}</small>
                            </div>
                        </div>
                        <div class="bg-white p-4">
                            <div class="d-flex mb-2">
                                <a class="text-primary text-uppercase text-decoration-none" href="">CONVOCATORIA</a>
                                <span class="text-primary px-2">|</span>
                                <a class="text-primary text-uppercase text-decoration-none" href="">{{ latestConv.con_titulo }}</a>
                            </div>
                            <a class="h5 m-0 text-decoration-none" href=""><p v-html="latestConv.con_descripcion"></p></a>
                        </div>
                        </router-link>
                    </div>
                </div>
                <div class="col-lg-4 col-md-6 mb-4 pb-2 anim-pause-2 anim-fade-in" v-if="Object.keys(latestAv).length != 0">
                    <div class="blog-item" >
                      <router-link
                              :to="'/detalleConvocatoria/' + latestAv.idconvocatorias"
                              @click="$store.commit('clickLink')">
                        <div class="position-relative">
                            <img class="img-fluid w-100" :src="url_api + '/Convocatorias/' + latestAv.con_foto_portada" alt="">
                            <div class="blog-date">
                                <h6 class="font-weight-bold mb-n1">{{ dia(latestAv.con_fecha_inicio) }}</h6>
                                <small class="text-white text-uppercase">{{ mes(latestAv.con_fecha_inicio)}}</small>
                            </div>
                        </div>
                        <div class="bg-white p-4">
                            <div class="d-flex mb-2">
                                <a class="text-primary text-uppercase text-decoration-none" href="">AVISO</a>
                                <span class="text-primary px-2">|</span>
                                <a class="text-primary text-uppercase text-decoration-none" href="">{{ latestAv.con_titulo }}</a>
                            </div>
                            <a class="h5 m-0 text-decoration-none" href=""><p v-html="latestAv.con_descripcion"></p></a>
                        </div>
                        </router-link>
                    </div>
                </div>
                <div class="col-lg-4 col-md-6 mb-4 pb-2 anim-pause-3 anim-fade-in" v-if="Object.keys(latestComun).length != 0">
                    <div class="blog-item" >
                      <router-link
                              :to="'/detalleConvocatoria/' + latestComun.idconvocatorias"
                              @click="$store.commit('clickLink')" >
                        <div class="position-relative">
                            <img class="img-fluid w-100" :src="url_api + '/Convocatorias/' + latestComun.con_foto_portada" alt="">
                            <div class="blog-date">
                                <h6 class="font-weight-bold mb-n1">{{ dia(latestComun.con_fecha_inicio) }}</h6>
                                <small class="text-white text-uppercase">{{ mes(latestComun.con_fecha_inicio) }}</small>
                            </div>
                        </div>
                        <div class="bg-white p-4">
                            <div class="d-flex mb-2">
                                <a class="text-primary text-uppercase text-decoration-none" href="">COMUNICADO</a>
                                <span class="text-primary px-2">|</span>
                                <a class="text-primary text-uppercase text-decoration-none" href="">{{ latestComun.con_titulo }}</a>
                            </div>
                            <a class="h5 m-0 text-decoration-none" href=""><p v-html="latestComun.con_descripcion"></p></a>
                        </div>
                        </router-link>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <!-- Blog end -->
    <!-- Blog cursos -->
    <div class="container-fluid fondo-ambiental py-5 paused" v-if=" Object.keys(latestCur).length +
                            Object.keys(latestSem).length > 0
                        ">
        <div class="container pt-5 pb-3">
            <div class="text-center mb-3 pb-3">
                <h1>CURSOS Y SEMINARIOS DISPONIBLES</h1>
            </div>
            <div class="row pb-3">
                <div class="col-lg-4 col-md-6 mb-4 pb-2  anim-fade-in" v-if="Object.keys(latestCur).length != 0" >
                    <div class="blog-item" >
                      <router-link
                      :to=" '/detalleCurso/' + latestCur.iddetalle_cursos_academicos"
                              @click="$store.commit('clickLink')">
                        <div class="position-relative">
                            <img class="img-fluid w-100"  :src="url_api + '/Cursos/' + latestCur.det_img_portada" alt="">
                            <div class="blog-date">
                                <h6 class="font-weight-bold mb-n1">{{dia(latestCur.det_fecha_ini)}}</h6>
                                <small class="text-white text-uppercase">{{mes(latestCur.det_fecha_ini)}}</small>
                            </div>
                        </div>
                        <div class="bg-white p-4">
                            <div class="d-flex mb-2">
                                <a class="text-primary text-uppercase text-decoration-none" href="">CURSO</a>
                                <span class="text-primary px-2">|</span>
                                <a class="text-primary text-uppercase text-decoration-none" href="">{{ latestCur.det_titulo  }}</a>
                            </div>
                            <a class="h5 m-0 text-decoration-none" href=""><p v-html="latestCur.det_descripcion"></p></a>
                        </div>
                        </router-link>
                    </div>
                </div>
                <div class="col-lg-4 col-md-6 mb-4 pb-2 anim-pause-2 anim-fade-in"  v-if="Object.keys(latestSem).length != 0">
                  <div class="blog-item">
                      <router-link
                      :to=" '/detalleCurso/' + latestSem.iddetalle_cursos_academicos"
                              @click="$store.commit('clickLink')">
                        <div class="position-relative">
                            <img class="img-fluid w-100"  :src="url_api + '/Cursos/' + latestSem.det_img_portada" alt="">
                            <div class="blog-date">
                               <h6 class="font-weight-bold mb-n1">{{dia(latestCur.det_fecha_ini)}}</h6>
                                <small class="text-white text-uppercase">{{mes(latestCur.det_fecha_ini)}}</small>
                            </div>
                        </div>
                        <div class="bg-white p-4">
                            <div class="d-flex mb-2">
                                <a class="text-primary text-uppercase text-decoration-none" href="">CURSO</a>
                                <span class="text-primary px-2">|</span>
                                <a class="text-primary text-uppercase text-decoration-none" href="">{{ latestSem.det_titulo  }}</a>
                            </div>
                            <a class="h5 m-0 text-decoration-none" href=""><p v-html="latestSem.det_descripcion"></p></a>
                        </div>
                        </router-link>
                    </div>
                </div>
            </div>
        </div>
    </div>


</div>
<!--INGENIERIA ELECTRONICA-->
<div v-if="Institucion.institucion_id == 26">
    <div class="container-fluid p-0 border-carousel">
          <div id="header-carousel" class="carousel slide" data-ride="carousel" >
              <div class="carousel-inner" >
                  <div class="carousel-item  active">
                      <img class="img-portada animacion-carousel" src="assets/img/header-electronica.jpg" alt="Image" style="height: 700px;">
                      <div class="carousel-caption d-flex flex-column align-items-center justify-content-center" > 
                          <div class="p-3" style="max-width: 900px;">
                            <h4 class=" text-uppercase mb-md-3 animated fadeInRight animacion-titulo texto-sub-titulo">BIENVENIDOS A NUESTRA</h4>
                              <h1 class="display-3 text-white mb-md-4 animated fadeInLeft texto-titulo ">{{ Institucion.institucion_nombre }}</h1>
                              <a href="/historia" class="btn btn-primary py-md-3 px-md-5 mt-2 animated fadeInUp animacion-titulo">Sobre Nosotros</a>
                          </div>
                      </div>
                  </div>
                  <div class="carousel-item paused" v-for="(image, portada_id) of Institucion.portada">
                      <img class="img-portada  animacion-carousel" style="height: 700px;" :src="url_api+'/InstitucionUpea/Portada/'+ image.portada_imagen" alt="Image">
                      <div class="carousel-caption d-flex flex-column align-items-center justify-content-center">
                          <div class="p-3" style="max-width: 900px;"> 
                              <h4 class=" text-uppercase mb-md-3 animated fadeInRight texto-sub-titulo">BIENVENIDOS A NUESTRA</h4>
                              <h1 class="display-3 text-white mb-md-4 animated fadeInLeft texto-titulo">{{ Institucion.institucion_nombre }}</h1>
                              <a href="/historia" class="btn btn-primary py-md-3 px-md-5 mt-2 animated fadeInUp animacion-titulo">Sobre Nosotros</a>
                          </div>
                      </div>
                  </div>
              </div>
              <a class="carousel-control-prev" href="#header-carousel" data-slide="prev">
                  <div class="btn btn-dark" style="width: 45px; height: 45px;">
                      <span class="carousel-control-prev-icon mb-n2"></span>
                  </div>
              </a>
              <a class="carousel-control-next" href="#header-carousel" data-slide="next">
                  <div class="btn btn-dark" style="width: 45px; height: 45px;">
                      <span class="carousel-control-next-icon mb-n2"></span>
                  </div>
              </a>
          </div>
  </div>
    <div class="container-fluid py-5" id="about">
        <div class="container py-5">
            <div class="row align-items-center">
                <div class="col-lg-5">
                    <img class="img-fluid mb-4 mb-lg-0" src="assets/img/img-electronica-1.jpg" alt="">
                </div>
                <div class="col-lg-7">
                    <h6 class="text-uppercase text-primary mb-3 animacion-titulo" style="letter-spacing: 3px;">CARRERA</h6>
                    <h1 class="display-4 mb-3"><span >{{ Institucion.institucion_nombre }}</span></h1>
                    <p class="module line-clamp" v-html="Institucion.institucion_objetivos"></p>
                    <router-link to="/misionvision" class="btn btn-primary font-weight-bold py-3 px-5 mt-2">Leer Más</router-link>
                </div>
            </div>
        </div>
    </div>
    <div class="container-fluid py-5" id="faqs">
        <div class="container py-5">
            <div class="section-title position-relative text-center">
                <h6 class="text-uppercase text-primary mb-3" style="letter-spacing: 3px;">NUESTRO</h6>
                <h1 class="display-4">CONTENIDO</h1>
            </div>
            <div class="row">
                <div class="col-md-6 border-right border-primary">
                    <div class="text-center text-md-right mr-md-3 mb-4 mb-md-0">
                        <h3 class="mb-4">INSTITUCIÓN</h3>
                        <router-link to="/publicaciones"> <h5 class="mb-3"><i class="fa fa-check text-primary float-md-right mr-2 mr-md-0 ml-md-2"></i>PUBLICACIONES</h5></router-link>
                        <router-link to="/ofertas"><h5 class="mb-3"><i class="fa fa-check text-primary float-md-right mr-2 mr-md-0 ml-md-2"></i>OFERTAS ACADÉMICAS</h5></router-link>
                        <router-link to="/eventos"><h5 class="mb-3"><i class="fa fa-check text-primary float-md-right mr-2 mr-md-0 ml-md-2"></i>EVENTOS</h5></router-link>
                        <router-link to="/servicios"><h5 class="mb-3"><i class="fa fa-check text-primary float-md-right mr-2 mr-md-0 ml-md-2"></i>SERVICIOS</h5></router-link>
                        <router-link to="/gacetas"><h5 class="mb-0"><i class="fa fa-check text-primary float-md-right mr-2 mr-md-0 ml-md-2"></i>GACETAS</h5></router-link>
                    </div>
                </div>
                <div class="col-md-6">
                    <div class="text-center text-md-left ml-md-3">
                        <h3 class="mb-4">CARRERA</h3>
                        <router-link :to="'/convocatorias/' + mc.idtipo_conv_comun" v-for="(mc, id_mc) of MenuConv" :key="id_mc">
                        <h5  class="mb-3"><i class="fa fa-check text-primary mr-2"></i>{{ mc.tipo_conv_comun_titulo}}</h5>
                        </router-link>
                        <router-link :to="'/cursos/' + mc.idtipo_curso_otros" v-for="(mc, id_mc) of MenuCur" :key="id_mc">
                        <h5  class="mb-3"><i class="fa fa-check text-primary mr-2"></i>{{ mc.tipo_conv_curso_nombre }}</h5>
                       </router-link>
                    </div>
                </div>
                <div class="col-md-12 text-center pt-3">
                  <router-link to="/videos" class="btn btn-primary font-weight-bold py-3 px-5 mt-4 btn-scroll">VER VIDEOS <i class="fa fa-play float-md-right  mr-md-0 ml-md-2"></i></router-link>
                </div>
            </div>
        </div>
    </div>
    <div  class="container-fluid bg-registration-electrica py-5 paused" style="margin: 90px 0;">
        <div class="container py-5">
            <div class="row align-items-center">
              <div class="col-md-4 anim-fade-in" >
                  <router-link to="/publicaciones">
                    <div class="d-flex mb-4 mb-lg-0">
                        <div class="d-flex flex-shrink-0 align-items-center justify-content-center bg-dark-1 mr-3" style="height: 100px; width: 100px;">
                            <i class="fa fa-2x fa-sticky-note "></i>
                        </div>
                        <div class="d-flex flex-column">
                            <h5 class="" style="color: white">Publicaciones</h5>
                            <p class="m-0">Vea lo último en nuestras publicaciones</p>
                        </div>
                    </div>
                  </router-link>
                </div>
                <div class="col-md-4 anim-fade-in">
                  <router-link to="/convocatorias/4">
                    <div class="d-flex mb-4 mb-lg-0">
                        <div class="d-flex flex-shrink-0 align-items-center justify-content-center bg-dark-1 mr-3" style="height: 100px; width: 100px;">
                            <i class="fa fa-2x fa-envelope "></i>
                        </div>
                        <div class="d-flex flex-column">
                            <h5 class="" style="color: white;">Comunicados</h5>
                            <p class="m-0">Vea lo último en nuestros comunicados</p>
                        </div>
                    
                    </div>
                  </router-link>
                </div>
                <div class="col-md-4 anim-fade-in">
                  <router-link to="/servicios">
                    <div class="d-flex mb-4 mb-lg-0">
                        <div class="d-flex flex-shrink-0 align-items-center justify-content-center bg-dark-1 mr-3" style="height: 100px; width: 100px;">
                            <i class="fa fa-2x fa-bookmark"></i>
                        </div>
                        <div class="d-flex flex-column">
                            <h5 class="" style="color: white">Servicios</h5>
                            <p class="m-0">Brindando los mejores sericios de nuestra carrera                      
                            </p>
                        </div>
                    </div>
                  </router-link>
                </div>
            </div>
        </div>
    </div>
    <div class="container-fluid py-5 paused">
        <div class="container pt-5 pb-3">
            <div class="text-center mb-3 pb-3">
                <h6 class="text-primary text-uppercase animacion-titulo" style="letter-spacing: 5px;">Categorías</h6>
                <h1>Nuestros Contenidos</h1>
            </div>
            <div class="row">          
                <div class="col-lg-4 col-md-6 mb-4 anim-pause animated fadeInUp">
                  <router-link to="/convocatorias/5">
                    <div class="destination-item position-relative overflow-hidden mb-2">
                        <img class="img-fluid" src="assets/img/convocatoria-1.jpg" alt="">
                        <a class="destination-overlay text-white text-decoration-none" href="">
                            <h5 class="text-white">Convocatorias</h5>
                            <span v-for="(mc, id_mc) of MenuConv" :key="id_mc"><div v-if="mc.idtipo_conv_comun==5">+{{ contarConv(mc.tipo_conv_comun_titulo) }}</div></span>
                        </a>
                    </div>
                    </router-link>
                </div>
                <div class="col-lg-4 col-md-6 mb-4 anim-pause-2 animated fadeInUp">
                  <router-link to="/cursos/4">
                    <div class="destination-item position-relative overflow-hidden mb-2">
                        <img class="img-fluid" src="assets/img/cursos-1.jpg" alt="">
                        <a class="destination-overlay text-white text-decoration-none" href="">
                            <h5 class="text-white">Cursos</h5>
                            <span v-for="(mc, id_mc) of MenuCur" :key="id_mc"><div v-if="mc.idtipo_curso_otros==4">+{{ contarCur(mc.tipo_conv_curso_nombre) }}</div></span>
                        </a>
                    </div>
                  </router-link>
                </div>
                <div class="col-lg-4 col-md-6 mb-4 anim-pause-3 animated fadeInUp">
                  <router-link to="/cursos/5">
                    <div class="destination-item position-relative overflow-hidden mb-2">
                        <img class="img-fluid" src="assets/img/seminario-1.jpg" alt="">
                        <a class="destination-overlay text-white text-decoration-none" href="">
                            <h5 class="text-white">Seminarios</h5>
                            <span v-for="(mc, id_mc) of MenuCur" :key="id_mc"><div v-if="mc.idtipo_curso_otros==5">+{{ contarCur(mc.tipo_conv_curso_nombre) }}</div></span>
                        </a>
                    </div>
                  </router-link>
                </div>
                <div class="col-lg-4 col-md-6 mb-4 anim-pause  animated fadeInDown">
                  <router-link to="/ofertas">
                    <div class="destination-item position-relative overflow-hidden mb-2">
                        <img class="img-fluid" src="assets/img/oferta-1.jpg" alt="">
                        <a class="destination-overlay text-white text-decoration-none" href="">
                            <h5 class="text-white">Ofertas Académicas</h5>
                            <span>+ {{ Ofer.length }}</span>
                        </a>
                    </div>
                  </router-link>
                </div>
                <div class="col-lg-4 col-md-6 mb-4 anim-pause-2 animated fadeInDown">
                  <router-link to="/eventos">
                    <div class="destination-item position-relative overflow-hidden mb-2">
                        <img class="img-fluid" src="assets/img/eventos-1.jpg" alt="">
                        <a class="destination-overlay text-white text-decoration-none" href="">
                            <h5 class="text-white">Eventos</h5>
                            <span>+ {{  Event.length  }}</span>
                        </a>
                    </div>
                  </router-link>
                </div>
                <div class="col-lg-4 col-md-6 mb-4 anim-pause-3 animated fadeInDown">
                  <router-link to="videos">
                    <div class="destination-item position-relative overflow-hidden mb-2">
                        <img class="img-fluid" src="assets/img/videos-1.jpg" alt="">
                        <a class="destination-overlay text-white text-decoration-none" href="">
                            <h5 class="text-white">Videos</h5>
                            <span>+ {{ Vid.length }}</span>
                        </a>
                    </div>
                  </router-link>
                </div>
            </div>
        </div>
    </div>
    <!-- Destination Start -->


    <!-- Service Start -->
    <div class="container-fluid py-5 paused" style=" background: rgb(0,0,0,0.8)">
        <div class="container pt-5 pb-3">
            <div class="text-center mb-3 pb-3">
                <h6 class="text-primary text-uppercase animacion-titulo anim-fade-in" style="letter-spacing: 5px;">{{Institucion.institucion_nombre}}</h6>
                <h1>MISIÓN Y VISIÓN</h1>
            </div>
            <div class="row">
              <div class="col-lg-6 col-md-6 mb-4 anim-pause-2 anim-fade-in caja-animacion">
                    <div class="service-item bg-black text-white text-center mb-2 py-5 px-4 sombra-border anim-vision">
                        <i class="fa fa-2x fa-bullseye mx-auto mb-4"></i>
                        <h5 class="mb-2 text-white opacity-5">MISIÓN</h5>
                        <p class="m-0 opacity-5" v-html="Institucion.institucion_mision"></p>
                    </div>
                </div>
                <div class="col-lg-6 col-md-6 anim-pause-3 mb-4 anim-fade-in">
                    <div class="service-item bg-black text-white text-center mb-2 py-5 px-4 sombra-border anim-vision">
                        <i class="fa fa-2x fa-eye mx-auto mb-4"></i>
                        <h5 class="mb-2 text-white opacity-5"> VISIÓN</h5>
                        <p class="m-0 opacity-5" v-html="Institucion.institucion_vision"></p>
                    </div>
                </div>
            </div>
        </div>
    </div>
                 <!-- Video Start -->
                 <div class="video wow fadeIn"  data-wow-delay="0.1s">
                <div class="container">
                    <button type="button" class="btn-play" data-toggle="modal" v-on:click="abrirvideo()" :data-src="Institucion.institucion_link_video_vision" data-target="#videoModal">
                        <span></span>
                    </button>
                </div>
            </div>
            
            <div class="modal fade" id="videoModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog" role="document">
                    <div class="modal-content">
                        <div class="modal-body">
                            <button type="button" class="close" v-on:click="closevideo()"  data-dismiss="modal" aria-label="Close" v-if="stado_video==0">
                                <span aria-hidden="true">&times;</span>
                            </button>        
                            <!-- 16:9 aspect ratio -->
                            <div class="embed-responsive embed-responsive-16by9">
                                <iframe class="embed-responsive-item"  id="video" :src="Institucion.institucion_link_video_vision"  allowscriptaccess="always" allow="autoplay"></iframe>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <!-- Video End -->

    <!-- Service End -->

    <!-- Team Start -->
    <div class="container-fluid py-5 paused">
        <div class="container pt-5 pb-3">
            <div class="text-center mb-3 pb-3">
                <h6 class="text-primary text-uppercase animacion-titulo anim-fade-in" style="letter-spacing: 5px;">AUTORIDADES</h6>
                <h1>Nuestras Autoridades</h1>
            </div>
            <div class="row">
                <div class="col-lg-4 col-md-4 col-sm-6 pb-2 anim-fade-in" v-for="(autoridad, id_aut) of InstitucionUpea.autoridad"
            :key="id_aut">
                    <div class="team-item bg-white mb-4">
                        <div class="team-img position-relative overflow-hidden">
                            <img class="img-fluid w-100" :src=" url_api + '/InstitucionUpea/Autoridad/' + autoridad.foto_autoridad " alt="">
                            <div class="team-social">
                                <a class="btn btn-outline-primary btn-square" :href="autoridad.twiter_autoridad"><i class="fab fa-twitter"></i></a>
                                <a class="btn btn-outline-primary btn-square" :href="autoridad.facebook_autoridad"><i class="fab fa-facebook-f"></i></a>
                                <a class="btn btn-outline-primary btn-square" :href="'https://wa.me/+'+autoridad.celular_autoridad"><i class="fab fa-whatsapp"></i></a>
                            </div>
                        </div>
                        <div class="text-center py-4">
                            <h5 class="text-truncate">{{autoridad.nombre_autoridad}}</h5>
                            <p class="m-0">{{autoridad.cargo_autoridad}}</p>
                        </div>
                    </div>
                </div>
                <div class="col-lg-4 col-md-4 col-sm-6 pb-2 anim-fade-in" v-for="(autoridad, id_aut) of Institucion.autoridad"
            :key="id_aut">
                    <div class="team-item bg-white mb-4">
                        <div class="team-img position-relative overflow-hidden">
                            <img class="img-fluid w-100" :src="url_api +
                             '/InstitucionUpea/Autoridad/' +
                                 autoridad.foto_autoridad " alt="">
                            <div class="team-social">
                                <a class="btn btn-outline-primary btn-square" :href="autoridad.twiter_autoridad"><i class="fab fa-twitter"></i></a>
                                <a class="btn btn-outline-primary btn-square" :href="autoridad.facebook_autoridad"><i class="fab fa-facebook-f"></i></a>
                                <a class="btn btn-outline-primary btn-square" :href="'https://wa.me/+'+autoridad.celular_autoridad"><i class="fab fa-whatsapp"></i></a>
                            </div>
                        </div>
                        <div class="text-center py-4">
                            <h5 class="text-truncate">{{autoridad.nombre_autoridad}}</h5>
                            <p class="m-0">{{autoridad.cargo_autoridad}}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <!-- Team End -->

    <!-- Blog Convocatoria -->
    <div class="container-fluid py-5 paused " v-if=" 
                          Object.keys(latestConv).length +
                            Object.keys(latestComun).length +
                            Object.keys(latestAv).length >
                          0 ">
        <div class="container pt-5 pb-3">
            <div class="text-center mb-3 pb-3">
                <h6 class="text-primary text-uppercase animacion-titulo anim-fade-in" style="letter-spacing: 5px;">NUESTRO BLOG</h6>
                <h1>CONVOCATORIAS, COMUNICADOS Y AVISOS DISPONIBLES</h1>
            </div>
            <div class="row pb-3">
                <div class="col-lg-4 col-md-6 mb-4 pb-2 anim-fade-in" v-if="Object.keys(latestConv).length != 0">
                    <div class="blog-item" >
                      <router-link
                              :to="'/detalleConvocatoria/' + latestConv.idconvocatorias"
                              @click="$store.commit('clickLink')">
                        <div class="position-relative">
                            <img class="img-fluid w-100" :src="url_api + '/Convocatorias/' + latestConv.con_foto_portada" alt="">
                            <div class="blog-date">
                                <h6 class="font-weight-bold mb-n1">{{dia(latestConv.con_fecha_inicio)}}</h6>
                                <small class="text-white text-uppercase">{{mes(latestConv.con_fecha_inicio)}}</small>
                            </div>
                        </div>
                        <div class="bg-white p-4">
                            <div class="d-flex mb-2">
                                <a class="text-primary text-uppercase text-decoration-none" href="">CONVOCATORIA</a>
                                <span class="text-primary px-2">|</span>
                                <a class="text-primary text-uppercase text-decoration-none" href="">{{ latestConv.con_titulo }}</a>
                            </div>
                            <a class="h5 m-0 text-decoration-none" href=""><p v-html="latestConv.con_descripcion"></p></a>
                        </div>
                        </router-link>
                    </div>
                </div>
                <div class="col-lg-4 col-md-6 mb-4 pb-2 anim-pause-2 anim-fade-in" v-if="Object.keys(latestAv).length != 0">
                    <div class="blog-item" >
                      <router-link
                              :to="'/detalleConvocatoria/' + latestAv.idconvocatorias"
                              @click="$store.commit('clickLink')">
                        <div class="position-relative">
                            <img class="img-fluid w-100" :src="url_api + '/Convocatorias/' + latestAv.con_foto_portada" alt="">
                            <div class="blog-date">
                                <h6 class="font-weight-bold mb-n1">{{ dia(latestAv.con_fecha_inicio) }}</h6>
                                <small class="text-white text-uppercase">{{ mes(latestAv.con_fecha_inicio)}}</small>
                            </div>
                        </div>
                        <div class="bg-white p-4">
                            <div class="d-flex mb-2">
                                <a class="text-primary text-uppercase text-decoration-none" href="">AVISO</a>
                                <span class="text-primary px-2">|</span>
                                <a class="text-primary text-uppercase text-decoration-none" href="">{{ latestAv.con_titulo }}</a>
                            </div>
                            <a class="h5 m-0 text-decoration-none" href=""><p v-html="latestAv.con_descripcion"></p></a>
                        </div>
                        </router-link>
                    </div>
                </div>
                <div class="col-lg-4 col-md-6 mb-4 pb-2 anim-pause-3 anim-fade-in" v-if="Object.keys(latestComun).length != 0">
                    <div class="blog-item" >
                      <router-link
                              :to="'/detalleConvocatoria/' + latestComun.idconvocatorias"
                              @click="$store.commit('clickLink')" >
                        <div class="position-relative">
                            <img class="img-fluid w-100" :src="url_api + '/Convocatorias/' + latestComun.con_foto_portada" alt="">
                            <div class="blog-date">
                                <h6 class="font-weight-bold mb-n1">{{ dia(latestComun.con_fecha_inicio) }}</h6>
                                <small class="text-white text-uppercase">{{ mes(latestComun.con_fecha_inicio) }}</small>
                            </div>
                        </div>
                        <div class="bg-white p-4">
                            <div class="d-flex mb-2">
                                <a class="text-primary text-uppercase text-decoration-none" href="">COMUNICADO</a>
                                <span class="text-primary px-2">|</span>
                                <a class="text-primary text-uppercase text-decoration-none" href="">{{ latestComun.con_titulo }}</a>
                            </div>
                            <a class="h5 m-0 text-decoration-none" href=""><p v-html="latestComun.con_descripcion"></p></a>
                        </div>
                        </router-link>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <!-- Blog end -->

    <!-- Blog cursos -->
    <div class="container-fluid py-5 paused" v-if=" Object.keys(latestCur).length +
                            Object.keys(latestSem).length > 0
                        ">
        <div class="container pt-5 pb-3">
            <div class="text-center mb-3 pb-3">
                <h1>CURSOS Y SEMINARIOS DISPONIBLES</h1>
            </div>
            <div class="row pb-3">
                <div class="col-lg-4 col-md-6 mb-4 pb-2  anim-fade-in" v-if="Object.keys(latestCur).length != 0" >
                    <div class="blog-item" >
                      <router-link
                      :to=" '/detalleCurso/' + latestCur.iddetalle_cursos_academicos"
                              @click="$store.commit('clickLink')">
                        <div class="position-relative">
                            <img class="img-fluid w-100"  :src="url_api + '/Cursos/' + latestCur.det_img_portada" alt="">
                            <div class="blog-date">
                                <h6 class="font-weight-bold mb-n1">{{dia(latestCur.det_fecha_ini)}}</h6>
                                <small class="text-white text-uppercase">{{mes(latestCur.det_fecha_ini)}}</small>
                            </div>
                        </div>
                        <div class="bg-white p-4">
                            <div class="d-flex mb-2">
                                <a class="text-primary text-uppercase text-decoration-none" href="">CURSO</a>
                                <span class="text-primary px-2">|</span>
                                <a class="text-primary text-uppercase text-decoration-none" href="">{{ latestCur.det_titulo  }}</a>
                            </div>
                            <a class="h5 m-0 text-decoration-none" href=""><p v-html="latestCur.det_descripcion"></p></a>
                        </div>
                        </router-link>
                    </div>
                </div>
                <div class="col-lg-4 col-md-6 mb-4 pb-2 anim-pause-2 anim-fade-in"  v-if="Object.keys(latestSem).length != 0">
                  <div class="blog-item">
                      <router-link
                      :to=" '/detalleCurso/' + latestSem.iddetalle_cursos_academicos"
                              @click="$store.commit('clickLink')">
                        <div class="position-relative">
                            <img class="img-fluid w-100"  :src="url_api + '/Cursos/' + latestSem.det_img_portada" alt="">
                            <div class="blog-date">
                               <h6 class="font-weight-bold mb-n1">{{dia(latestCur.det_fecha_ini)}}</h6>
                                <small class="text-white text-uppercase">{{mes(latestCur.det_fecha_ini)}}</small>
                            </div>
                        </div>
                        <div class="bg-white p-4">
                            <div class="d-flex mb-2">
                                <a class="text-primary text-uppercase text-decoration-none" href="">CURSO</a>
                                <span class="text-primary px-2">|</span>
                                <a class="text-primary text-uppercase text-decoration-none" href="">{{ latestSem.det_titulo  }}</a>
                            </div>
                            <a class="h5 m-0 text-decoration-none" href=""><p v-html="latestSem.det_descripcion"></p></a>
                        </div>
                        </router-link>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
<!--INGENIERIA ELECTRICA-->
<div v-if="Institucion.institucion_id == 27">
    <div class="container-fluid p-0 border-carousel">
          <div id="header-carousel" class="carousel slide" data-ride="carousel" >
              <div class="carousel-inner" >
                  <div class="carousel-item  active">
                      <img class="img-portada animacion-carousel" src="assets/img/header-electrica.jpg" alt="Image" style="height: 700px;">
                      <div class="carousel-caption d-flex flex-column align-items-center justify-content-center">
                          <div class="p-3" style="max-width: 900px;">
                            <h4 class=" text-uppercase mb-md-3 animated fadeInRight animacion-titulo texto-sub-titulo">BIENVENIDOS A NUESTRA</h4>
                              <h1 class="display-3 text-white mb-md-4 animated fadeInLeft texto-titulo ">{{ Institucion.institucion_nombre }}</h1>
                              <a href="/historia" class="btn btn-primary py-md-3 px-md-5 mt-2 animated fadeInUp animacion-titulo">Sobre Nosotros</a>
                          </div>
                      </div>
                  </div>
                  <div class="carousel-item paused" v-for="(image, portada_id) of Institucion.portada">
                      <img class="img-portada  animacion-carousel" style="height: 700px;" :src="url_api+'/InstitucionUpea/Portada/'+ image.portada_imagen" alt="Image">
                      <div class="carousel-caption d-flex flex-column align-items-center justify-content-center">
                          <div class="p-3" style="max-width: 900px;"> 
                              <h4 class=" text-uppercase mb-md-3 animated fadeInRight texto-sub-titulo">BIENVENIDOS A NUESTRA</h4>
                              <h1 class="display-3 text-white mb-md-4 animated fadeInLeft texto-titulo">{{ Institucion.institucion_nombre }}</h1>
                              <a href="/historia" class="btn btn-primary py-md-3 px-md-5 mt-2 animated fadeInUp animacion-titulo">Sobre Nosotros</a>
                          </div>
                      </div>
                  </div>
              </div>
              <a class="carousel-control-prev" href="#header-carousel" data-slide="prev">
                  <div class="btn btn-dark" style="width: 45px; height: 45px;">
                      <span class="carousel-control-prev-icon mb-n2"></span>
                  </div>
              </a>
              <a class="carousel-control-next" href="#header-carousel" data-slide="next">
                  <div class="btn btn-dark" style="width: 45px; height: 45px;">
                      <span class="carousel-control-next-icon mb-n2"></span>
                  </div>
              </a>
          </div>
  </div>
    <!-- About Section -->
    <section id="about paused">
        <!-- Container -->
        <div class="container">
            <!-- About wrapper -->
            <div class="about-wrapper">
                <div class="after"><h1>Nosotros</h1></div>
                <div class="content">
                    <h5 class="title mb-3 anim-fade-in">{{ Institucion.institucion_nombre}}</h5>
                    <!-- row -->
                    <div class="row">
                        <div class="col anim-fade-in">
                            <p><b>MISIÒN</b></p>    
                            <p v-html="Institucion.institucion_mision" ></p>                    
                        </div>
                        <div class="col anim-fade-in">
                            <p><b>VISIÒN</b></p>
                            <p v-html="Institucion.institucion_vision" ></p>
                        </div>
                    </div><!-- End of Row -->                   
                    <a href="/misionvision">Leer màs</a>
                </div>
            </div><!-- End of About Wrapper -->         
        </div>  <!-- End of Container-->        
     </section><!--End of Section -->


    <!-- section -->
    <section style="background:rgb(0,0,0,0.7)">
        <!-- Container -->
        <div class="container paused">
            <!-- row -->
            <div class="row justify-content-between align-items-center">
                <div class="col-md-6 anim-right">
                    <div class="img-wrapper">
                        <div class="after"></div>
                        <img src="assets/img/img-objetivos.jpg" class="w-100" alt="About Us">
                    </div>
                </div>
                <div class="col-md-5 anim-left">
                    <h6 class="title mb-3">NUESTROS OBJETIVOS</h6>
                    <p class="text-white " v-html="Institucion.institucion_objetivos"></p>
                </div>
            </div>
            <!-- End of Row -->
        </div>  
        <!-- End of Container -->
    </section><!-- End of Section -->   

    <!-- section -->
    <section>
        <!-- Container -->
        <div class="container paused">
            <!-- Row -->
            <div class="row justify-content-between align-items-center">                
                <div class="col-md-5 anim-right">
                    <div class="module line-clamp">
                        <p style="color:black" v-html="Institucion.institucion_sobre_ins"></p>
                        </div> 
                    <a class="btn btn-outline-primary btn-sm" href="/perfil">Leer màs</a>
                </div>
                <div class="col-md-6 anim-left">
                    <div class="img-wrapper">
                        <div class="after right"></div>
                        <img src="assets/img/img-perfil.jpg" class="w-100" alt="About Us">
                    </div>                      
                </div>
            </div><!-- End of Row -->           
        </div><!-- End of Container-->      
    </section><!-- End of Section -->
    

    <!-- Features Section -->
    <section class="has-bg-img" id="features">
         <!-- Video Start -->
         <div class="video wow fadeIn anim-fade-in" data-wow-delay="0.1s">
                <div class="container">
                    <button type="button" class="btn-play" v-on:click="abrirvideo()" data-toggle="modal" :data-src="Institucion.institucion_link_video_vision" data-target="#videoModal">
                        <span></span>
                    </button>
                </div>
            </div>
            
            <div class="modal fade" id="videoModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog" role="document">
                    <div class="modal-content">
                        <div class="modal-body">
                            <button type="button" class="close" v-on:click="closevideo()" data-dismiss="modal" aria-label="Close" v-if="stado_video==0">
                                <span aria-hidden="true">&times;</span>
                            </button>        
                            <!-- 16:9 aspect ratio -->
                            <div class="embed-responsive embed-responsive-16by9">
                                <iframe class="embed-responsive-item"  id="video" :src="Institucion.institucion_link_video_vision"  allowscriptaccess="always" allow="autoplay"></iframe>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <!-- Video End -->
    </section><!-- End of features Section -->  

    <div class="container-fluid py-5 paused" id="faqs">
        <div class="container py-5">
            <div class="section-title position-relative text-center">
                <h6 class="text-uppercase text-primary mb-3 anim-fade-in" style="letter-spacing: 3px;">NUESTRO</h6>
                <h1 class="display-4 anim-fade-in">CONTENIDO</h1>
            </div>
            <div class="row paused">
                <div class="col-md-6 border-right border-primary">
                    <div class="text-center text-md-right mr-md-3 mb-4 mb-md-0">
                        <h3 class="mb-4">INSTITUCIÓN</h3>
                        <router-link to="/publicaciones"> <h5 class="mb-3 anim-right"><i class="fa fa-check text-primary float-md-right mr-2 mr-md-0 ml-md-2"></i>PUBLICACIONES</h5></router-link>
                        <router-link to="/ofertas"><h5 class="mb-3 anim-pause-2 anim-right"><i class="fa fa-check text-primary float-md-right mr-2 mr-md-0 ml-md-2"></i>OFERTAS ACADÉMICAS</h5></router-link>
                        <router-link to="/eventos"><h5 class="mb-3 anim-pause-3 anim-right"><i class="fa fa-check text-primary float-md-right mr-2 mr-md-0 ml-md-2"></i>EVENTOS</h5></router-link>
                        <router-link to="/servicios"><h5 class="mb-3 anim-pause-4 anim-right"><i class="fa fa-check text-primary float-md-right mr-2 mr-md-0 ml-md-2"></i>SERVICIOS</h5></router-link>
                        <router-link to="/gacetas"><h5 class="mb-0 anim-pause-5 anim-right"><i class="fa fa-check text-primary float-md-right mr-2 mr-md-0 ml-md-2"></i>GACETAS</h5></router-link>
                    </div>
                </div>
                <div class="col-md-6">
                    <div class="text-center text-md-left ml-md-3">
                        <h3 class="mb-4">CARRERA</h3>
                        <router-link :to="'/convocatorias/' + mc.idtipo_conv_comun" v-for="(mc, id_mc) of MenuConv" :key="id_mc">
                        <h5  class="mb-3 anim-pause-2 anim-left"><i class="fa fa-check text-primary mr-2"></i>{{ mc.tipo_conv_comun_titulo}}</h5>
                        </router-link>
                        <router-link :to="'/cursos/' + mc.idtipo_curso_otros" v-for="(mc, id_mc) of MenuCur" :key="id_mc">
                        <h5  class="mb-3 anim-pause-3 anim-left"><i class="fa fa-check text-primary mr-2"></i>{{ mc.tipo_conv_curso_nombre }}</h5>
                       </router-link>
                    </div>
                </div>
                <div class="col-md-12 text-center pt-3">
                  <router-link to="/videos" class="btn btn-primary font-weight-bold py-3 px-5 mt-4 btn-scroll">VER VIDEOS <i class="fa fa-play float-md-right  mr-md-0 ml-md-2"></i></router-link>
                </div>
            </div>
        </div>
    </div>
        <!-- Section -->
        <section class="text-center text-light height-auto bg-registration-electrica paused">
        <h1 class="texto-titulo">VER NUESTRO PLÁN DE ESTUDIOS</h1>
        <a class="btn btn-outline-primary btn-sm anim-pause-2 anim-right" :href="
                  url_api +
                  '/InstitucionUpea/' +
                  Institucion.institucion_organigrama
                "
                target="_blank">Ver Plán</a>
    </section><!-- End of Section -->

    <div class="container-fluid py-5 paused">
        <div class="container pt-5 pb-3">
            <div class="row">          
                <div class="col-lg-4 col-md-6 mb-4 anim-pause animated fadeInUp">
                  <router-link to="/convocatorias/5">
                    <div class="destination-item position-relative overflow-hidden mb-2">
                        <img class="img-fluid" src="assets/img/convocatoria-1.jpg" alt="">
                        <a class="destination-overlay text-white text-decoration-none" href="">
                            <h5 class="text-white">Convocatorias</h5>
                            <span v-for="(mc, id_mc) of MenuConv" :key="id_mc"><div v-if="mc.idtipo_conv_comun==5">+{{ contarConv(mc.tipo_conv_comun_titulo) }}</div></span>
                        </a>
                    </div>
                    </router-link>
                </div>
                <div class="col-lg-4 col-md-6 mb-4 anim-pause-2 animated fadeInUp">
                  <router-link to="/cursos/4">
                    <div class="destination-item position-relative overflow-hidden mb-2">
                        <img class="img-fluid" src="assets/img/cursos-1.jpg" alt="">
                        <a class="destination-overlay text-white text-decoration-none" href="">
                            <h5 class="text-white">Cursos</h5>
                            <span v-for="(mc, id_mc) of MenuCur" :key="id_mc"><div v-if="mc.idtipo_curso_otros==4">+{{ contarCur(mc.tipo_conv_curso_nombre) }}</div></span>
                        </a>
                    </div>
                  </router-link>
                </div>
                <div class="col-lg-4 col-md-6 mb-4 anim-pause-3 animated fadeInUp">
                  <router-link to="/cursos/5">
                    <div class="destination-item position-relative overflow-hidden mb-2">
                        <img class="img-fluid" src="assets/img/seminario-1.jpg" alt="">
                        <a class="destination-overlay text-white text-decoration-none" href="">
                            <h5 class="text-white">Seminarios</h5>
                            <span v-for="(mc, id_mc) of MenuCur" :key="id_mc"><div v-if="mc.idtipo_curso_otros==5">+{{ contarCur(mc.tipo_conv_curso_nombre) }}</div></span>
                        </a>
                    </div>
                  </router-link>
                </div>
                <div class="col-lg-4 col-md-6 mb-4 anim-pause  animated fadeInDown">
                  <router-link to="/ofertas">
                    <div class="destination-item position-relative overflow-hidden mb-2">
                        <img class="img-fluid" src="assets/img/oferta-1.jpg" alt="">
                        <a class="destination-overlay text-white text-decoration-none" href="">
                            <h5 class="text-white">Ofertas Académicas</h5>
                            <span>+ {{ Ofer.length }}</span>
                        </a>
                    </div>
                  </router-link>
                </div>
                <div class="col-lg-4 col-md-6 mb-4 anim-pause-2 animated fadeInDown">
                  <router-link to="/eventos">
                    <div class="destination-item position-relative overflow-hidden mb-2">
                        <img class="img-fluid" src="assets/img/eventos-1.jpg" alt="">
                        <a class="destination-overlay text-white text-decoration-none" href="">
                            <h5 class="text-white">Eventos</h5>
                            <span>+ {{  Event.length  }}</span>
                        </a>
                    </div>
                  </router-link>
                </div>
                <div class="col-lg-4 col-md-6 mb-4 anim-pause-3 animated fadeInDown">
                  <router-link to="videos">
                    <div class="destination-item position-relative overflow-hidden mb-2">
                        <img class="img-fluid" src="assets/img/videos-1.jpg" alt="">
                        <a class="destination-overlay text-white text-decoration-none" href="">
                            <h5 class="text-white">Videos</h5>
                            <span>+ {{ Vid.length }}</span>
                        </a>
                    </div>
                  </router-link>
                </div>
            </div>
        </div>
    </div>
    <!-- Destination Start -->

    <!-- Team Start -->
    <div class="container-fluid py-5 paused">
        <div class="container pt-5 pb-3">
            <div class="text-center mb-3 pb-3">
                <h6 class="text-primary text-uppercase animacion-titulo anim-fade-in" style="letter-spacing: 5px;">AUTORIDADES</h6>
                <h1>Nuestras Autoridades</h1>
            </div>
            <div class="row">
                <div class="col-lg-4 col-md-4 col-sm-6 pb-2 anim-fade-in" v-for="(autoridad, id_aut) of InstitucionUpea.autoridad"
            :key="id_aut">
                    <div class="team-item bg-white mb-4">
                        <div class="team-img position-relative overflow-hidden">
                            <img class="img-fluid w-100" :src=" url_api + '/InstitucionUpea/Autoridad/' + autoridad.foto_autoridad " alt="">
                            <div class="team-social">
                                <a class="btn btn-outline-primary btn-square" :href="autoridad.twiter_autoridad"><i class="fab fa-twitter"></i></a>
                                <a class="btn btn-outline-primary btn-square" :href="autoridad.facebook_autoridad"><i class="fab fa-facebook-f"></i></a>
                                <a class="btn btn-outline-primary btn-square" :href="'https://wa.me/+'+autoridad.celular_autoridad"><i class="fab fa-whatsapp"></i></a>
                            </div>
                        </div>
                        <div class="text-center py-4">
                            <h5 class="text-truncate">{{autoridad.nombre_autoridad}}</h5>
                            <p class="m-0">{{autoridad.cargo_autoridad}}</p>
                        </div>
                    </div>
                </div>
                <div class="col-lg-4 col-md-4 col-sm-6 pb-2 anim-fade-in" v-for="(autoridad, id_aut) of Institucion.autoridad"
            :key="id_aut">
                    <div class="team-item bg-white mb-4">
                        <div class="team-img position-relative overflow-hidden">
                            <img class="img-fluid w-100" :src="url_api +
                             '/InstitucionUpea/Autoridad/' +
                                 autoridad.foto_autoridad " alt="">
                            <div class="team-social">
                                <a class="btn btn-outline-primary btn-square" :href="autoridad.twiter_autoridad"><i class="fab fa-twitter"></i></a>
                                <a class="btn btn-outline-primary btn-square" :href="autoridad.facebook_autoridad"><i class="fab fa-facebook-f"></i></a>
                                <a class="btn btn-outline-primary btn-square" :href="'https://wa.me/+'+autoridad.celular_autoridad"><i class="fab fa-whatsapp"></i></a>
                            </div>
                        </div>
                        <div class="text-center py-4">
                            <h5 class="text-truncate">{{autoridad.nombre_autoridad}}</h5>
                            <p class="m-0">{{autoridad.cargo_autoridad}}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <!-- Team End -->

    <!-- Blog Convocatoria -->
    <div class="container-fluid py-5 paused " v-if=" 
                          Object.keys(latestConv).length +
                            Object.keys(latestComun).length +
                            Object.keys(latestAv).length >
                          0 ">
        <div class="container pt-5 pb-3">
            <div class="text-center mb-3 pb-3">
                <h6 class="text-primary text-uppercase animacion-titulo anim-fade-in" style="letter-spacing: 5px;">NUESTRO BLOG</h6>
                <h1>CONVOCATORIAS, COMUNICADOS Y AVISOS DISPONIBLES</h1>
            </div>
            <div class="row pb-3">
                <div class="col-lg-4 col-md-6 mb-4 pb-2 anim-fade-in" v-if="Object.keys(latestConv).length != 0">
                    <div class="blog-item" >
                      <router-link
                              :to="'/detalleConvocatoria/' + latestConv.idconvocatorias"
                              @click="$store.commit('clickLink')">
                        <div class="position-relative">
                            <img class="img-fluid w-100" :src="url_api + '/Convocatorias/' + latestConv.con_foto_portada" alt="">
                            <div class="blog-date">
                                <h6 class="font-weight-bold mb-n1">{{dia(latestConv.con_fecha_inicio)}}</h6>
                                <small class="text-white text-uppercase">{{mes(latestConv.con_fecha_inicio)}}</small>
                            </div>
                        </div>
                        <div class="bg-white p-4">
                            <div class="d-flex mb-2">
                                <a class="text-primary text-uppercase text-decoration-none" href="">CONVOCATORIA</a>
                                <span class="text-primary px-2">|</span>
                                <a class="text-primary text-uppercase text-decoration-none" href="">{{ latestConv.con_titulo }}</a>
                            </div>
                            <a class="h5 m-0 text-decoration-none" href=""><p v-html="latestConv.con_descripcion"></p></a>
                        </div>
                        </router-link>
                    </div>
                </div>
                <div class="col-lg-4 col-md-6 mb-4 pb-2 anim-pause-2 anim-fade-in" v-if="Object.keys(latestAv).length != 0">
                    <div class="blog-item" >
                      <router-link
                              :to="'/detalleConvocatoria/' + latestAv.idconvocatorias"
                              @click="$store.commit('clickLink')">
                        <div class="position-relative">
                            <img class="img-fluid w-100" :src="url_api + '/Convocatorias/' + latestAv.con_foto_portada" alt="">
                            <div class="blog-date">
                                <h6 class="font-weight-bold mb-n1">{{ dia(latestAv.con_fecha_inicio) }}</h6>
                                <small class="text-white text-uppercase">{{ mes(latestAv.con_fecha_inicio)}}</small>
                            </div>
                        </div>
                        <div class="bg-white p-4">
                            <div class="d-flex mb-2">
                                <a class="text-primary text-uppercase text-decoration-none" href="">AVISO</a>
                                <span class="text-primary px-2">|</span>
                                <a class="text-primary text-uppercase text-decoration-none" href="">{{ latestAv.con_titulo }}</a>
                            </div>
                            <a class="h5 m-0 text-decoration-none" href=""><p v-html="latestAv.con_descripcion"></p></a>
                        </div>
                        </router-link>
                    </div>
                </div>
                <div class="col-lg-4 col-md-6 mb-4 pb-2 anim-pause-3 anim-fade-in" v-if="Object.keys(latestComun).length != 0">
                    <div class="blog-item" >
                      <router-link
                              :to="'/detalleConvocatoria/' + latestComun.idconvocatorias"
                              @click="$store.commit('clickLink')" >
                        <div class="position-relative">
                            <img class="img-fluid w-100" :src="url_api + '/Convocatorias/' + latestComun.con_foto_portada" alt="">
                            <div class="blog-date">
                                <h6 class="font-weight-bold mb-n1">{{ dia(latestComun.con_fecha_inicio) }}</h6>
                                <small class="text-white text-uppercase">{{ mes(latestComun.con_fecha_inicio) }}</small>
                            </div>
                        </div>
                        <div class="bg-white p-4">
                            <div class="d-flex mb-2">
                                <a class="text-primary text-uppercase text-decoration-none" href="">COMUNICADO</a>
                                <span class="text-primary px-2">|</span>
                                <a class="text-primary text-uppercase text-decoration-none" href="">{{ latestComun.con_titulo }}</a>
                            </div>
                            <a class="h5 m-0 text-decoration-none" href=""><p v-html="latestComun.con_descripcion"></p></a>
                        </div>
                        </router-link>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <!-- Blog end -->

    <!-- Blog cursos -->
    <div class="container-fluid py-5 paused" v-if=" Object.keys(latestCur).length +
                            Object.keys(latestSem).length > 0
                        ">
        <div class="container pt-5 pb-3">
            <div class="text-center mb-3 pb-3">
                <h1>CURSOS Y SEMINARIOS DISPONIBLES</h1>
            </div>
            <div class="row pb-3">
                <div class="col-lg-4 col-md-6 mb-4 pb-2  anim-fade-in" v-if="Object.keys(latestCur).length != 0" >
                    <div class="blog-item" >
                      <router-link
                      :to=" '/detalleCurso/' + latestCur.iddetalle_cursos_academicos"
                              @click="$store.commit('clickLink')">
                        <div class="position-relative">
                            <img class="img-fluid w-100"  :src="url_api + '/Cursos/' + latestCur.det_img_portada" alt="">
                            <div class="blog-date">
                                <h6 class="font-weight-bold mb-n1">{{dia(latestCur.det_fecha_ini)}}</h6>
                                <small class="text-white text-uppercase">{{mes(latestCur.det_fecha_ini)}}</small>
                            </div>
                        </div>
                        <div class="bg-white p-4">
                            <div class="d-flex mb-2">
                                <a class="text-primary text-uppercase text-decoration-none" href="">CURSO</a>
                                <span class="text-primary px-2">|</span>
                                <a class="text-primary text-uppercase text-decoration-none" href="">{{ latestCur.det_titulo  }}</a>
                            </div>
                            <a class="h5 m-0 text-decoration-none" href=""><p v-html="latestCur.det_descripcion"></p></a>
                        </div>
                        </router-link>
                    </div>
                </div>
                <div class="col-lg-4 col-md-6 mb-4 pb-2 anim-pause-2 anim-fade-in"  v-if="Object.keys(latestSem).length != 0">
                  <div class="blog-item">
                      <router-link
                      :to=" '/detalleCurso/' + latestSem.iddetalle_cursos_academicos"
                              @click="$store.commit('clickLink')">
                        <div class="position-relative">
                            <img class="img-fluid w-100"  :src="url_api + '/Cursos/' + latestSem.det_img_portada" alt="">
                            <div class="blog-date">
                               <h6 class="font-weight-bold mb-n1">{{dia(latestCur.det_fecha_ini)}}</h6>
                                <small class="text-white text-uppercase">{{mes(latestCur.det_fecha_ini)}}</small>
                            </div>
                        </div>
                        <div class="bg-white p-4">
                            <div class="d-flex mb-2">
                                <a class="text-primary text-uppercase text-decoration-none" href="">CURSO</a>
                                <span class="text-primary px-2">|</span>
                                <a class="text-primary text-uppercase text-decoration-none" href="">{{ latestSem.det_titulo  }}</a>
                            </div>
                            <a class="h5 m-0 text-decoration-none" href=""><p v-html="latestSem.det_descripcion"></p></a>
                        </div>
                        </router-link>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>

<!--INGENIERIA TEXTIL-->

<div class="fact">
            <div class="container paused">
                <div class="row align-items-center paused" style="text-align: center;justify-content: center;">           
                    <div class="col-lg-6 col-md-6" >
                        <h3 class="text-primary text-uppercase anim-fade-in">Enlances Externos</h3>
                  <Carousel  :wrap-around="true" :autoplay="3000" >
                    <Slide v-for="(link, id_link) of Links"             
                  :key="id_link">
                  <a 
                  :href="link.ei_link"
                  target="_blank">
                        <div class="fact-item method"  :style="
                      'background-image: url(' +
                      url_api +
                      '/InstitucionUpea/LinksExternos/' +
                      link.ei_imagen +
                      ');object-fit:cover;background-size: cover; background-postion:center;height:150px;width:450px;'">
                      <span></span>
                        </div>
                        <div class="cat">{{ link.ei_nombre }}</div> 
                          </a>
                    </Slide>
                    <template #addons>
                    <Navigation />
                    <Pagination />
                    </template>
                </Carousel>           
                    </div>     
                                    <div class="col-lg-6 col-md-6" style="text-align: center;">
                        <h3 class="text-primary text-uppercase animacion-titulo anim-fade-in">Último video publicado</h3>
                        <div v-if="Vid.length==0">
                        <h2>No hay Videos</h2>
                    </div>
                    <div v-else>
                    <iframe
                                :src="Vid[Vid.length-1].video_enlace"
                                frameborder="0"
                                style="border-radius: 5px" width="100%" height="300px" />

                                <router-link to="/videos"></router-link>
                    </div>
                        </div> 
                </div>
            </div>
 </div> 
 <!-- Destination Start -->
</template>
<script>
import { mapState } from "vuex";
import VuePdfEmbed from "vue-pdf-embed";

import 'vue3-carousel/dist/carousel.css'
import { Carousel, Slide, Pagination, Navigation } from 'vue3-carousel'
export default {
  name: "HomeCustom",
  data() {
    return {
      stado_video:0,

      Conv: 0,
      latestConv: {},
      latestComun: {},
      latestAv: {},

      Cur: 0,
      latestCur: {},
      latestSem: {},

      Serv: [],
      Ofer: [],
      Publi: [],
      Gac: [],
      Event: [],
      Vid: [],

      NUM_RESULTS: 3,
      pag: 1,
      pager: 0,

      NUM_RESULTS_CUR: 3,
      pag_cur: 1,
      pager_cur: 0,

      NUM_RESULTS_PUB: 3,
      pag_pub: 1,
      pager_pub: 0,

      Eventos: [],
      search: "",
      searchGet: false,
      searchValues: [],

      Publicaciones: [],
      
      Ofertas: [],

      Convocatorias: [],
    };
  },
  computed: {
    ...mapState(["url_api", "Institucion", "InstitucionUpea", "MenuConv", "MenuCur", "Links"]),
    /*fecha(){
      const fecha2 = new Date('11/9/2023');
      const fechaActual2 = fecha2.toLocaleDateString();
      console.log(fechaActual2);
      const fecha = new Date();
      const fechaActual = fecha.toLocaleDateString();
      console.log(fechaActual);
      if(fechaActual2 > fechaActual)
      {
        return true
      }else{
        return false
      }
    },*/
  },
  components: {
    VuePdfEmbed,
    Carousel,
    Slide,
    Pagination,
    Navigation,
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
   /* async getTipoCur() {
      try {
        let res = await this.axios.get("/api/TipoCurso/" + 4);
        this.tipo = res.data.Descripcion.tipo_conv_curso_nombre;
        this.getCursos();
      } catch (error) {
        console.log(error);
      }
    },
    async getCursos() {
      try {
        let res = await this.axios.get(
          "/api/cursosAll/" + process.env.VUE_APP_ID_CARRERA
        );
        this.Cursos = [];
        res.data.forEach((cs) => {
          if (
            cs.det_estado == "1" &&
            cs.tipo_curso_otro.tipo_conv_curso_nombre == this.tipo
          ) {
            this.Cursos.push(cs);
          }
        });
        this.pager_cur = this.Cursos.length / this.NUM_RESULTS_CUR;
        if (this.pager_cur - Math.trunc(this.pager_cur) > 0) {
          this.pager_cur = Math.trunc(this.pager_cur) + 1;
        }
        this.$store.commit("loading");
      } catch (error) {
        console.log(error);
      }
    },*/
    async getTipoConv() {
      try {
        let res = await this.axios.get("/api/Tipoconvocatorias/" + 5);
        this.tipo = res.data.Descripcion.tipo_conv_comun_titulo;
        this.getConvocatorias();
      } catch (error) {
        console.log(error);
      }
    },
    async getConvocatorias() {
      try {
        let res = await this.axios.get(
          "/api/convocatoriasAll/" + process.env.VUE_APP_ID_CARRERA
        );
        this.Convocatorias = [];
        res.data.forEach((cca) => {
          if (
            cca.con_estado == "1" &&
            cca.tipo_conv_comun.tipo_conv_comun_titulo == this.tipo
          ) {
            this.Convocatorias.push(cca);
          }
        });
        this.pager = this.Convocatorias.length / this.NUM_RESULTS;
        if (this.pager - Math.trunc(this.pager) > 0) {
          this.pager = Math.trunc(this.pager) + 1;
        }
        this.$store.commit("loading");
      } catch (error) {
        console.log(error);
      }
    },
    async getOfertas() {
      try {
        let res = await this.axios.get(
          "/api/OfertasAcademicasAll/" + process.env.VUE_APP_ID_CARRERA
        );
        this.Ofertas = res.data;
        this.pager = this.Ofertas.length / this.NUM_RESULTS;
        if (this.pager - Math.trunc(this.pager) > 0) {
          this.pager = Math.trunc(this.pager) + 1;
        }
        this.$store.commit("loading");
      } catch (error) {
        console.log(error);
      }
    },
    async getPublicaciones() {
      try {
        let ress = await this.axios.get(
          "/api/PublicacionesAll/" + process.env.VUE_APP_ID_INSTITUCION
        );
        this.Publicaciones = ress.data;
        this.pager_pub = this.Publicaciones.length / this.NUM_RESULTS_PUB;
        if (this.pager_pub - Math.trunc(this.pager_pub) > 0) {
          this.pager_pub = Math.trunc(this.pager_pub) + 1;
        }
        this.$store.commit("loading");
      } catch (error) {
        console.log(error);
      }
    },
    async getEventosAll() {
      try {
        let res = await this.axios.get(
          "/api/eventoAll/" + process.env.VUE_APP_ID_INSTITUCION
        );
        this.Eventos = res.data;
        this.pager = this.Eventos.length / this.NUM_RESULTS;
        if (this.pager - Math.trunc(this.pager) > 0) {
          this.pager = Math.trunc(this.pager) + 1;
        }
        this.$store.commit("loading");
      } catch (error) {
        console.log(error);
      }
    },
    async getConvocatoriasAll() {
      try {
        let res = await this.axios.get(
          "/api/convocatoriasAll/" + process.env.VUE_APP_ID_CARRERA
        );
        this.Conv = res.data;
        this.Conv.forEach((conv) => {
          if (
            conv.tipo_conv_comun.tipo_conv_comun_titulo == "CONVOCATORIAS" &&
            conv.con_estado == "1"
          ) {
            if (Object.keys(this.latestConv).length == 0) {
              this.latestConv = conv;
            }
          } else {
            if (
              conv.tipo_conv_comun.tipo_conv_comun_titulo == "COMUNICADOS" &&
              conv.con_estado == "1"
            ) {
              if (Object.keys(this.latestComun).length == 0) {
                this.latestComun = conv;
              }
            } else {
              if (
                conv.tipo_conv_comun.tipo_conv_comun_titulo == "AVISOS" &&
                conv.con_estado == "1"
              ) {
                if (Object.keys(this.latestAv).length == 0) {
                  this.latestAv = conv;
                }
              }
            }
          }
        });
        this.pager = this.Institucion.autoridad.length / this.NUM_RESULTS;
        if (this.pager - Math.trunc(this.pager) > 0) {
          this.pager = Math.trunc(this.pager) + 1;
        }
      } catch (error) {
        console.log(error);
      }
    },
    async getCursosAll() {
      try {
        let res = await this.axios.get(
          "/api/cursosAll/" + process.env.VUE_APP_ID_CARRERA
        );
        this.Cur = res.data;
        this.Cur.forEach((cur) => {
          if (
            cur.tipo_curso_otro.tipo_conv_curso_nombre == "CURSOS" &&
            cur.det_estado == "1"
          ) {
            if (Object.keys(this.latestCur).length == 0) {
              this.latestCur = cur;
            }
          } else {
            if (
              cur.tipo_curso_otro.tipo_conv_curso_nombre == "SEMINARIOS" &&
              cur.det_estado == "1"
            ) {
              if (Object.keys(this.latestSem).length == 0) {
                this.latestSem = cur;
              }
            }
          }
        });
      } catch (error) {
        console.log(error);
      }
    },
    async getServiciosAll() {
      try {
        let res = await this.axios.get(
          "/api/ServicioAll/" + process.env.VUE_APP_ID_CARRERA
        );
        this.Serv = res.data;
      } catch (error) {
        console.log(error);
      }
    },
    async getOfertasAll() {
      try {
        let res = await this.axios.get(
          "/api/OfertasAcademicasAll/" + process.env.VUE_APP_ID_CARRERA
        );
        this.Ofer = res.data;
      } catch (error) {
        console.log(error);
      }
    },
    async getPublicacionesAll() {
      try {
        let res = await this.axios.get(
          "/api/publicacionesAll/" + process.env.VUE_APP_ID_INSTITUCION
        );
        this.Publi = res.data;
      } catch (error) {
        console.log(error);
      }
    },
    async getGacetaAll() {
      try {
        let res = await this.axios.get(
          "/api/gacetaunivAll/" + process.env.VUE_APP_ID_INSTITUCION
        );
        this.Gac = res.data;
      } catch (error) {
        console.log(error);
      }
    },
    async getEventos() {
      try {
        let res = await this.axios.get(
          "/api/eventoAll/" + process.env.VUE_APP_ID_INSTITUCION
        );
        this.Event = res.data;
      } catch (error) {
        console.log(error);
      }
    },
    async getVideos() {
      try {
        let res = await this.axios.get(
          "/api/VideosAll/" + process.env.VUE_APP_ID_INSTITUCION
        );
        this.Vid = res.data;
        this.$store.commit("loading");
      } catch (error) {
        console.log(error);
      }
    },
    async setImage(id, img) {
      try {
        await document
          .querySelector("." + id)
          .setAttribute("style", 'background-image: url("' + img + '");');
      } catch (error) {
        console.log(error);
      }
    },
    contarConv(tipo) {
      if (tipo && this.Conv) {
        let count = 0;
        this.Conv.forEach((conv) => {
          if (conv.tipo_conv_comun.tipo_conv_comun_titulo == tipo) {
            count++;
          }
        });
        return count;
      }
    },
    contarCur(tipo) {
      if (tipo && this.Cur) {
        let count = 0;
        this.Cur.forEach((cur) => {
          if (cur.tipo_curso_otro.tipo_conv_curso_nombre == tipo) {
            count++;
          }
        });
        return count;
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
          meses[fechaArray[1] - 1] +
          " de " +
          fechaArray[0]
        );
      }
    },
    scrollInto(elementId) {
      const section = document.querySelector(`#${elementId}`);
      section.scrollIntoView({
        behavior: 'smooth'
      });
    },
    stylos() {
        console.log("holasdas"+process.env.VUE_APP_ID_INSTITUCION);
      var elemento = document.getElementById("style");
      elemento.setAttribute("href", ""); 
        if(process.env.VUE_APP_ID_INSTITUCION==26)
        {
            elemento.setAttribute("href", "/./assets/css/style-electronica.css"); 
        }else{
            if(process.env.VUE_APP_ID_INSTITUCION==27)
            {
                elemento.setAttribute("href", "/./assets/css/style-electrica.css"); 
            }else{
                if(process.env.VUE_APP_ID_INSTITUCION==29)
                {
                    elemento.setAttribute("href", "/./assets/css/style-textil.css"); 
                }else{
                    if(process.env.VUE_APP_ID_INSTITUCION==30){
                        elemento.setAttribute("href", "/./assets/css/style-ambiental.css"); 
                }
             }
            }
        }
    },
    closevideo(){
        document.querySelector('.embed-responsive-item').removeAttribute('src');
        document.querySelector('.embed-responsive-item').setAttribute('src', this.Institucion.institucion_link_video_vision);
    },
  },
  created() {
    this.$store.commit("loadOn");
    this.getConvocatoriasAll();
    this.getCursosAll();
    this.getServiciosAll();
    this.getOfertasAll();
    this.getOfertas();
    this.getPublicaciones();
    this.getPublicacionesAll();
    this.getGacetaAll();
    this.getEventos();
    this.getVideos();
    this.getEventosAll();
    this.getConvocatorias();
    this.getTipoConv();
    this.stylos();
  },
};
</script>