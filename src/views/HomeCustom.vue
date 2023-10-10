<template>

<!-- Carousel Start -->
<div class="container-fluid p-0 border-carousel">
        <div id="header-carousel" class="carousel slide" data-ride="carousel" >
            <div class="carousel-inner" >
                <div class="carousel-item  active">
                    <img class="img-portada animacion-carousel" src="assets/img/img-carousel.jpg" alt="Image" style="height: 700px;">
                    <div class="carousel-caption d-flex flex-column align-items-center justify-content-center">
                        <div class="p-3" style="max-width: 900px;">
                          <h4 class="text-white text-uppercase mb-md-3 animated fadeInRight animacion-titulo">BIENVENIDOS A NUESTRA</h4>
                            <h1 class="display-3 text-white mb-md-4 animated fadeInLeft">{{ Institucion.institucion_nombre }}</h1>
                            <a href="" class="btn btn-primary py-md-3 px-md-5 mt-2 animated fadeInUp">Book Now</a>
                        </div>
                    </div>
                </div>
                <div class="carousel-item paused" v-for="(image, portada_id) of Institucion.portada">
                    <img class="img-portada  animacion-carousel" style="height: 700px;" :src="url_api+'/InstitucionUpea/Portada/'+ image.portada_imagen" alt="Image">
                    <div class="carousel-caption d-flex flex-column align-items-center justify-content-center">
                        <div class="p-3" style="max-width: 900px;"> 
                            <h4 class="text-white text-uppercase mb-md-3 animated fadeInRight">BIENVENIDOS A NUESTRA</h4>
                            <h1 class="display-3 text-white mb-md-4 animated fadeInLeft">{{ Institucion.institucion_nombre }}</h1>
                            <a href="" class="btn btn-primary py-md-3 px-md-5 mt-2 animated fadeInUp">Book Now</a>
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
    <!-- Carousel End -->


    <!-- Booking Start 
    <div class="container-fluid booking mt-5 pb-5">
        <div class="container pb-5">
            <div class="bg-light shadow" style="padding: 30px;">
                <div class="row align-items-center" style="min-height: 60px;">
                    <div class="col-md-10">
                        <div class="row">
                            <div class="col-md-3">
                                <div class="mb-3 mb-md-0">
                                    <select class="custom-select px-4" style="height: 47px;">
                                        <option selected>Destination</option>
                                        <option value="1">Destination 1</option>
                                        <option value="2">Destination 1</option>
                                        <option value="3">Destination 1</option>
                                    </select>
                                </div>
                            </div>
                            <div class="col-md-3">
                                <div class="mb-3 mb-md-0">
                                    <div class="date" id="date1" data-target-input="nearest">
                                        <input type="text" class="form-control p-4 datetimepicker-input" placeholder="Depart Date" data-target="#date1" data-toggle="datetimepicker"/>
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-3">
                                <div class="mb-3 mb-md-0">
                                    <div class="date" id="date2" data-target-input="nearest">
                                        <input type="text" class="form-control p-4 datetimepicker-input" placeholder="Return Date" data-target="#date2" data-toggle="datetimepicker"/>
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-3">
                                <div class="mb-3 mb-md-0">
                                    <select class="custom-select px-4" style="height: 47px;">
                                        <option selected>Duration</option>
                                        <option value="1">Duration 1</option>
                                        <option value="2">Duration 1</option>
                                        <option value="3">Duration 1</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-2">
                        <button class="btn btn-primary btn-block" type="submit" style="height: 47px; margin-top: -2px;">Submit</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
     Booking End -->


    <!-- About Start -->
    <div class="container-fluid py-5 paused">
        <div class="container pt-5">
            <div class="row">
                <div class="col-lg-6" style="min-height: 500px;">
                    <div class="position-relative h-100 animated fadeInLeft">
                        <img class="position-absolute w-100 h-100" src="assets/img/ingenieria-electronica-img3.jpg" style="object-fit: cover;">
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
    <!-- About End -->



    <div class="container-fluid bg-registration py-5 paused" style="margin: 90px 0;">
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
    <!-- Feature Start -->
    <div class="container-fluid pb-5">
        <div class="container pb-5">
            <div class="row">
                
            </div>
        </div>
    </div>
    <!-- Feature End -->
    <!-- Destination Start -->
    <div class="container-fluid py-5 paused">
        <div class="container pt-5 pb-3">
            <div class="text-center mb-3 pb-3">
                <h6 class="text-primary text-uppercase" style="letter-spacing: 5px;">Categorías</h6>
                <h1>Nuestros Contenidos</h1>
            </div>
            <div class="row">          
                <div class="col-lg-4 col-md-6 mb-4 animated fadeInUp">
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
                <div class="col-lg-4 col-md-6 mb-4  animated fadeInDown">
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
                <div class="col-lg-4 col-md-6 mb-4 anim-pause-2 animated fadeDown">
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
    <div class="container-fluid py-5 paused">
        <div class="container pt-5 pb-3">
            <div class="text-center mb-3 pb-3">
                <h6 class="text-primary text-uppercase animacion-titulo anim-fade-in" style="letter-spacing: 5px;">{{Institucion.institucion_nombre}}</h6>
                <h1>MISIÓN Y VISIÓN</h1>
            </div>
            <div class="row">
              <div class="col-lg-6 col-md-6 mb-4 anim-pause-2 anim-fade-in">
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
                            <button type="button" class="close" data-dismiss="modal" aria-label="Close" v-if="stado_video==0">
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


    <!-- Packages Start 
    <div class="container-fluid py-5">
        <div class="container pt-5 pb-3">
            <div class="text-center mb-3 pb-3">
                <h6 class="text-primary text-uppercase" style="letter-spacing: 5px;">Packages</h6>
                <h1>Pefect Tour Packages</h1>
            </div>
            <div class="row">
                <div class="col-lg-4 col-md-6 mb-4">
                    <div class="package-item bg-white mb-2">
                        <img class="img-fluid" src="assets/img/package-1.jpg" alt="">
                        <div class="p-4">
                            <div class="d-flex justify-content-between mb-3">
                                <small class="m-0"><i class="fa fa-map-marker-alt text-primary mr-2"></i>Thailand</small>
                                <small class="m-0"><i class="fa fa-calendar-alt text-primary mr-2"></i>3 days</small>
                                <small class="m-0"><i class="fa fa-user text-primary mr-2"></i>2 Person</small>
                            </div>
                            <a class="h5 text-decoration-none" href="">Discover amazing places of the world with us</a>
                            <div class="border-top mt-4 pt-4">
                                <div class="d-flex justify-content-between">
                                    <h6 class="m-0"><i class="fa fa-star text-primary mr-2"></i>4.5 <small>(250)</small></h6>
                                    <h5 class="m-0">$350</h5>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-lg-4 col-md-6 mb-4">
                    <div class="package-item bg-white mb-2">
                        <img class="img-fluid" src="assets/img/package-2.jpg" alt="">
                        <div class="p-4">
                            <div class="d-flex justify-content-between mb-3">
                                <small class="m-0"><i class="fa fa-map-marker-alt text-primary mr-2"></i>Thailand</small>
                                <small class="m-0"><i class="fa fa-calendar-alt text-primary mr-2"></i>3 days</small>
                                <small class="m-0"><i class="fa fa-user text-primary mr-2"></i>2 Person</small>
                            </div>
                            <a class="h5 text-decoration-none" href="">Discover amazing places of the world with us</a>
                            <div class="border-top mt-4 pt-4">
                                <div class="d-flex justify-content-between">
                                    <h6 class="m-0"><i class="fa fa-star text-primary mr-2"></i>4.5 <small>(250)</small></h6>
                                    <h5 class="m-0">$350</h5>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-lg-4 col-md-6 mb-4">
                    <div class="package-item bg-white mb-2">
                        <img class="img-fluid" src="assets/img/package-3.jpg" alt="">
                        <div class="p-4">
                            <div class="d-flex justify-content-between mb-3">
                                <small class="m-0"><i class="fa fa-map-marker-alt text-primary mr-2"></i>Thailand</small>
                                <small class="m-0"><i class="fa fa-calendar-alt text-primary mr-2"></i>3 days</small>
                                <small class="m-0"><i class="fa fa-user text-primary mr-2"></i>2 Person</small>
                            </div>
                            <a class="h5 text-decoration-none" href="">Discover amazing places of the world with us</a>
                            <div class="border-top mt-4 pt-4">
                                <div class="d-flex justify-content-between">
                                    <h6 class="m-0"><i class="fa fa-star text-primary mr-2"></i>4.5 <small>(250)</small></h6>
                                    <h5 class="m-0">$350</h5>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-lg-4 col-md-6 mb-4">
                    <div class="package-item bg-white mb-2">
                        <img class="img-fluid" src="assets/img/package-4.jpg" alt="">
                        <div class="p-4">
                            <div class="d-flex justify-content-between mb-3">
                                <small class="m-0"><i class="fa fa-map-marker-alt text-primary mr-2"></i>Thailand</small>
                                <small class="m-0"><i class="fa fa-calendar-alt text-primary mr-2"></i>3 days</small>
                                <small class="m-0"><i class="fa fa-user text-primary mr-2"></i>2 Person</small>
                            </div>
                            <a class="h5 text-decoration-none" href="">Discover amazing places of the world with us</a>
                            <div class="border-top mt-4 pt-4">
                                <div class="d-flex justify-content-between">
                                    <h6 class="m-0"><i class="fa fa-star text-primary mr-2"></i>4.5 <small>(250)</small></h6>
                                    <h5 class="m-0">$350</h5>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-lg-4 col-md-6 mb-4">
                    <div class="package-item bg-white mb-2">
                        <img class="img-fluid" src="assets/img/package-5.jpg" alt="">
                        <div class="p-4">
                            <div class="d-flex justify-content-between mb-3">
                                <small class="m-0"><i class="fa fa-map-marker-alt text-primary mr-2"></i>Thailand</small>
                                <small class="m-0"><i class="fa fa-calendar-alt text-primary mr-2"></i>3 days</small>
                                <small class="m-0"><i class="fa fa-user text-primary mr-2"></i>2 Person</small>
                            </div>
                            <a class="h5 text-decoration-none" href="">Discover amazing places of the world with us</a>
                            <div class="border-top mt-4 pt-4">
                                <div class="d-flex justify-content-between">
                                    <h6 class="m-0"><i class="fa fa-star text-primary mr-2"></i>4.5 <small>(250)</small></h6>
                                    <h5 class="m-0">$350</h5>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-lg-4 col-md-6 mb-4">
                    <div class="package-item bg-white mb-2">
                        <img class="img-fluid" src="assets/img/package-6.jpg" alt="">
                        <div class="p-4">
                            <div class="d-flex justify-content-between mb-3">
                                <small class="m-0"><i class="fa fa-map-marker-alt text-primary mr-2"></i>Thailand</small>
                                <small class="m-0"><i class="fa fa-calendar-alt text-primary mr-2"></i>3 days</small>
                                <small class="m-0"><i class="fa fa-user text-primary mr-2"></i>2 Person</small>
                            </div>
                            <a class="h5 text-decoration-none" href="">Discover amazing places of the world with us</a>
                            <div class="border-top mt-4 pt-4">
                                <div class="d-flex justify-content-between">
                                    <h6 class="m-0"><i class="fa fa-star text-primary mr-2"></i>4.5 <small>(250)</small></h6>
                                    <h5 class="m-0">$350</h5>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
   Packages End -->


    <!-- Registration Start 
    <div class="container-fluid bg-registration py-5" style="margin: 90px 0;">
        <div class="container py-5">
            <div class="row align-items-center">
                <div class="col-lg-7 mb-5 mb-lg-0">
                    <div class="mb-4">
                        <h6 class="text-primary text-uppercase" style="letter-spacing: 5px;">Mega Offer</h6>
                        <h1 class="text-white"><span class="text-primary">30% OFF</span> For Honeymoon</h1>
                    </div>
                    <p class="text-white">Invidunt lorem justo sanctus clita. Erat lorem labore ea, justo dolor lorem ipsum ut sed eos,
                        ipsum et dolor kasd sit ea justo. Erat justo sed sed diam. Ea et erat ut sed diam sea ipsum est
                        dolor</p>
                    <ul class="list-inline text-white m-0">
                        <li class="py-2"><i class="fa fa-check text-primary mr-3"></i>Labore eos amet dolor amet diam</li>
                        <li class="py-2"><i class="fa fa-check text-primary mr-3"></i>Etsea et sit dolor amet ipsum</li>
                        <li class="py-2"><i class="fa fa-check text-primary mr-3"></i>Diam dolor diam elitripsum vero.</li>
                    </ul>
                </div>
                <div class="col-lg-5">
                    <div class="card border-0">
                        <div class="card-header bg-primary text-center p-4">
                            <h1 class="text-white m-0">Sign Up Now</h1>
                        </div>
                        <div class="card-body rounded-bottom bg-white p-5">
                            <form>
                                <div class="form-group">
                                    <input type="text" class="form-control p-4" placeholder="Your name" required="required" />
                                </div>
                                <div class="form-group">
                                    <input type="email" class="form-control p-4" placeholder="Your email" required="required" />
                                </div>
                                <div class="form-group">
                                    <select class="custom-select px-4" style="height: 47px;">
                                        <option selected>Select a destination</option>
                                        <option value="1">destination 1</option>
                                        <option value="2">destination 1</option>
                                        <option value="3">destination 1</option>
                                    </select>
                                </div>
                                <div>
                                    <button class="btn btn-primary btn-block py-3" type="submit">Sign Up Now</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
     Registration End -->


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
    <!-- Blog End -->
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
    }
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
  },
};
</script>