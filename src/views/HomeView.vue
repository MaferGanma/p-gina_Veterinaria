<template>
    <div></div>
    
  <div class="container-fluid p-0 mb-5 pb-5">
        <div id="header-carousel" class="carousel slide carousel-fade" data-ride="carousel">
            <div class="carousel-inner">
                <div class="carousel-item position-relative active" style="height: 100vh; min-height: 401px;">
                    <img class="position-absolute w-100 h-100" src="@/assets/img/BackGround-UPEA-08.jpg" style="object-fit: cover;">
                    <div class="carousel-caption d-flex flex-column justify-content-center" >
                        <div class="p-3 animacionX" style="max-width: 900px; position: absolute; left: 350px;">
                            <h4 class="text-white text-uppercase mb-4" style="letter-spacing: 6px;">Bienvenido</h4>
                            <h3 class="display-2 text-capitalize text-white mb-4">Carrera de</h3>
                            <h3 class="display-2 text-capitalize text-white mb-4">historia</h3>
                            <router-link a class="btn btn-primary py-3 px-5 mt-2" to="/about">Sobre Nosotros</router-link>
                        </div>
                    </div>
                </div>
                <div class="carousel-item position-relative" style="height: 100vh; min-height: 400px;">
                    <img class="position-absolute w-100 h-100"  src="@/assets/img/BackGround-UPEA-11.jpg" style="object-fit: cover;">
                    <div class="carousel-caption d-flex flex-column justify-content-center">
                        <div class="p-3 animacionX" style="max-width: 900px;position: absolute; left: 350px;">
                            <h4 class="text-white text-uppercase mb-4" style="letter-spacing: 3px;">Results You Deserve</h4>
                            <h3 class="display-2 text-capitalize text-white mb-4">We prepared to oppose for you</h3>
                            <a class="btn btn-primary py-3 px-5 mt-2" href="#">Call Us Now</a>
                        </div>
                    </div>
                </div>
            </div>
            <a class="carousel-control-prev" href="#header-carousel" data-slide="prev">
                <div class="btn btn-lg btn-secondary btn-lg-square">
                    <span class="carousel-control-prev-icon"></span>
                </div>
            </a>
            <a class="carousel-control-next" href="#header-carousel" data-slide="next">
                <div class="btn btn-lg btn-secondary btn-lg-square">
                    <span class="carousel-control-next-icon"></span>
                </div>
            </a>
        </div>
    </div>
    <!-- Carousel End -->
    <div class="container py-5">
        <div class="row">
            <!-- Blog Detail Start -->
            <div class="col-lg-8">
                <div class="position-relative">
                    <img class="img-fluid w-100" src="@/assets/img/blog-1.jpg " alt="" > 
                </div>
                <div class="pt-4 pb-2" >
                    <div class="d-flex mb-3">
                        <div class="d-flex align-items-center">
                            <img class="rounded-circle" style="width: 40px; height: 40px;" src="@/assets/img/user.jpg" alt="">
                            <a class="text-muted ml-2" href="">John Doe</a>
                        </div>
                        <div class="d-flex align-items-center ml-4">
                            <i class="far fa-bookmark text-primary"></i>
                            <a class="text-muted ml-2" href="">Web Design</a>
                        </div>
                    </div>
                    <h2 class="font-weight-bold">¿Que es la Historia</h2>
                </div>

                <div class="mb-5">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat, voluptatem, veritatis odit alias inventore eaque eius ratione eos maiores tempora dicta incidunt. Optio nam totam recusandae esse voluptatibus iusto dolores.</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero, quasi odit cumque omnis in expedita nihil eligendi necessitatibus nemo officiis quam eos esse impedit assumenda minus blanditiis, voluptatem, dolorum totam!</p>
                    <h2 class="mb-4">Importancia de estudiar Licenciatura en economia</h2>
                    <img class="img-fluid w-50 float-left mr-4 mb-3" src="@/assets/img/blog-1.jpg" alt="Image">
                    <p>Diam dolor est labore duo invidunt ipsum clita et, sed et lorem voluptua tempor invidunt at est sanctus sanctus. Clita dolores sit kasd diam takimata justo diam lorem sed. Magna amet sed rebum eos. Clita no magna no dolor erat diam tempor rebum consetetur, sanctus labore sed nonumy diam lorem amet eirmod. No at tempor sea diam kasd, takimata ea nonumy elitr sadipscing gubergren erat. Gubergren at lorem invidunt sadipscing rebum sit amet ut ut, voluptua diam dolores at sadipscing stet. Clita dolor amet dolor ipsum vero ea ea eos. Invidunt sed diam dolores takimata dolor dolore dolore sit. Sit ipsum erat amet lorem et, magna sea at sed et eos. Accusam eirmod kasd lorem clita sanctus ut consetetur et. Et duo tempor sea kasd clita ipsum et. Takimata kasd diam justo est eos erat aliquyam et ut. Ea sed sadipscing no justo et eos labore, gubergren ipsum magna dolor lorem dolore, elitr aliquyam takimata sea kasd dolores diam, amet et est accusam labore eirmod vero et voluptua. Amet labore clita duo et no. Rebum voluptua magna eos magna, justo gubergren labore sit voluptua eos.</p>
                    <h3 class="mb-4">Carrera de Economia UPEA</h3>
                    <img class="img-fluid w-50 float-right ml-4 mb-3" src="@/assets/img/blog-2.jpg" alt="Image">
                    <p>Diam dolor est labore duo invidunt ipsum clita et, sed et lorem voluptua tempor invidunt at est sanctus sanctus. Clita dolores sit kasd diam takimata justo diam lorem sed. Magna amet sed rebum eos. Clita no magna no dolor erat diam tempor rebum consetetur, sanctus labore sed nonumy diam lorem amet eirmod. No at tempor sea diam kasd, takimata ea nonumy elitr sadipscing gubergren erat. Gubergren at lorem invidunt sadipscing rebum sit amet ut ut, voluptua diam dolores at sadipscing stet. Clita dolor amet dolor ipsum vero ea ea eos. Invidunt sed diam dolores takimata dolor dolore dolore sit. Sit ipsum erat amet lorem et, magna sea at sed et eos. Accusam eirmod kasd lorem clita sanctus ut consetetur et. Et duo tempor sea kasd clita ipsum et. Takimata kasd diam justo est eos erat aliquyam et ut. Ea sed sadipscing no justo et eos labore, gubergren ipsum magna dolor lorem dolore, elitr aliquyam takimata sea kasd dolores diam, amet et est accusam labore eirmod vero et voluptua. Amet labore clita duo et no.</p>
                </div>      
            </div>
            <!-- Blog Detail End -->

            <!-- Sidebar Start -->
            <div class="col-lg-4 mt-5 mt-lg-0">
                <!-- Search Form Start 
                <div class="mb-5">
                    <form action="">
                        <div class="input-group">
                            <input type="text" class="form-control form-control-lg" placeholder="Keyword">
                            <div class="input-group-append">
                                <span class="input-group-text bg-transparent text-primary"><i
                                        class="fa fa-search"></i></span>
                            </div>
                        </div>
                    </form>
                </div>
                 Search Form End -->

                <!-- Category Start -->
                <div class="mb-5">
                    <h3 class="font-weight-bold mb-4">Categrias</h3>
                    <ul class="list-group">
                        <li class="list-group-item d-flex justify-content-between align-items-center">
                            <a class="font-weight-semi-bold text-decoration-none" href="#"><i class="fa fa-angle-right mr-2"></i>Avisos</a>
                            <span class="badge badge-primary badge-pill">150</span>
                        </li>
                        <li class="list-group-item d-flex justify-content-between align-items-center">
                            <a class="font-weight-semi-bold text-decoration-none" href="#"><i class="fa fa-angle-right mr-2"></i>Comunicados</a>
                            <span class="badge badge-primary badge-pill">131</span>
                        </li>
                        <li class="list-group-item d-flex justify-content-between align-items-center">
                            <a class="font-weight-semi-bold text-decoration-none" href="#"><i class="fa fa-angle-right mr-2"></i>Convocatorias</a>
                            <span class="badge badge-primary badge-pill">78</span>
                        </li>
                        <li class="list-group-item d-flex justify-content-between align-items-center">
                            <a class="font-weight-semi-bold text-decoration-none" href="#"><i class="fa fa-angle-right mr-2"></i>Cursos</a>
                            <span class="badge badge-primary badge-pill">56</span>
                        </li>
                        <li class="list-group-item d-flex justify-content-between align-items-center">
                            <a class="font-weight-semi-bold text-decoration-none" href="#"><i class="fa fa-angle-right mr-2"></i>Seminarios</a>
                            <span class="badge badge-primary badge-pill">98</span>
                        </li>
                        <li class="list-group-item d-flex justify-content-between align-items-center">
                            <a class="font-weight-semi-bold text-decoration-none" href="#"><i class="fa fa-angle-right mr-2"></i>Servisios</a>
                            <span class="badge badge-primary badge-pill">98</span>
                        </li>
                        <li class="list-group-item d-flex justify-content-between align-items-center">
                            <a class="font-weight-semi-bold text-decoration-none" href="#"><i class="fa fa-angle-right mr-2"></i>Ofertas Académicas</a>
                            <span class="badge badge-primary badge-pill">98</span>
                        </li>
                        <li class="list-group-item d-flex justify-content-between align-items-center">
                            <a class="font-weight-semi-bold text-decoration-none" href="#"><i class="fa fa-angle-right mr-2"></i>publicaciones</a>
                            <span class="badge badge-primary badge-pill">98</span>
                        </li>
                        <li class="list-group-item d-flex justify-content-between align-items-center">
                            <a class="font-weight-semi-bold text-decoration-none" href="#"><i class="fa fa-angle-right mr-2"></i>Gaceta</a>
                            <span class="badge badge-primary badge-pill">98</span>
                        </li>
                        <li class="list-group-item d-flex justify-content-between align-items-center">
                            <a class="font-weight-semi-bold text-decoration-none" href="#"><i class="fa fa-angle-right mr-2"></i>Eventos</a>
                            <span class="badge badge-primary badge-pill">98</span>
                        </li>
                        <li class="list-group-item d-flex justify-content-between align-items-center">
                            <a class="font-weight-semi-bold text-decoration-none" href="#"><i class="fa fa-angle-right mr-2"></i>Videos</a>
                            <span class="badge badge-primary badge-pill">98</span>
                        </li>
                    </ul>
                </div>
                <!-- Category End -->

                <!-- Recent Post Start -->
                <div class="mb-5">
                    <h3 class="font-weight-bold mb-4">enojada</h3>
                    <div class="d-flex mb-3">
                        <img class="img-fluid" src="@/assets/img/blog-1.jpg" style="width: 80px; height: 80px;" alt="">
                        <div class="d-flex align-items-center border border-left-0 px-3" style="height: 80px;">
                            <a class="text-secondary font-weight-semi-bold" href="">Convocatoria 1</a>
                        </div>
                    </div>
                    <div class="d-flex mb-3">
                        <img class="img-fluid" src="@/assets/img/blog-2.jpg" style="width: 80px; height: 80px;" alt="">
                        <div class="d-flex align-items-center border border-left-0 px-3" style="height: 80px;">
                            <a class="text-secondary font-weight-semi-bold" href="">Convocatoria 2</a>
                        </div>
                    </div>
                    <div class="d-flex mb-3">
                        <img class="img-fluid" src="@/assets/img/blog-1.jpg" style="width: 80px; height: 80px;" alt="">
                        <div class="d-flex align-items-center border border-left-0 px-3" style="height: 80px;">
                            <a class="text-secondary font-weight-semi-bold" href="">Convocatoria 3</a>
                        </div>
                    </div>
                    <div class="d-flex mb-3">
                        <img class="img-fluid" src="@/assets/img/blog-2.jpg" style="width: 80px; height: 80px;" alt="">
                        <div class="d-flex align-items-center border border-left-0 px-3" style="height: 80px;">
                            <a class="text-secondary font-weight-semi-bold" href="">Convocatoria 4</a>
                        </div>
                    </div>
                    <div class="d-flex mb-3">
                        <img class="img-fluid" src="@/assets/img/blog-1.jpg" style="width: 80px; height: 80px;" alt="">
                        <div class="d-flex align-items-center border border-left-0 px-3" style="height: 80px;">
                            <a class="text-secondary font-weight-semi-bold" href="">Convocatoria 5</a>
                        </div>
                    </div>
                </div>
                <!-- Recent Post End -->

                <!-- Image Start -->
                <div class="border p-3 mb-5">
                    <img src="img/blog-1.jpg" alt="" class="img-fluid">
                </div>
                <!-- Image End -->

                <!-- Tags Start -->
                <div class="mb-5">
                    <h3 class="font-weight-bold mb-4">Tags</h3>
                    <div class="d-flex flex-wrap m-n1">
                        <a href="https://economia.upea.bo/" class="btn btn-outline-primary m-1">Pagina Web</a>
                        <a href="https://inscripcioneseconomia.upea.bo/" class="btn btn-outline-primary m-1">Inscripciones</a>
                        <a href="https://virtualeconomia.upea.bo/" class="btn btn-outline-primary m-1">Campus Virtual</a>
                        <a href="https://sie.upea.bo/" class="btn btn-outline-primary m-1">SIE-UPEA</a>
                    </div>
                </div>
                <!-- Tags End -->

                <!-- Image Start -->
                <div class="border p-3 mb-5">
                    <img src="@/assets/img/blog-2.jpg" alt="" class="img-fluid">
                </div>
                <!-- Image End -->

                <!-- Plain Text Start -->
                <div>
                    <h3 class="font-weight-bold mb-4">Plain Text</h3>
                    <div class="border p-3">
                        Aliquyam sed lorem stet diam dolor sed ut sit. Ut sanctus erat ea est aliquyam dolor et. Et no consetetur eos labore ea erat voluptua et. Et aliquyam dolore sed erat. Magna sanctus sed eos tempor rebum dolor, tempor clita sit et elitr eirmod.
                    </div>
                </div>
                <!-- Plain Text End -->
            </div>
            <!-- Sidebar End -->
        </div>
    </div>

    <!-- About Start -->
    <div class="container-fluid py-5">
        <div class="container">
            <div class="row align-items-center pb-1">
                <div class="col-lg-5">
                    <img class="img-thumbnail p-3" src="img/about.jpg" alt="">
                </div>
                <div class="col-lg-7 mt-5 mt-lg-0">
                    <small class="bg-primary text-white text-uppercase font-weight-bold px-1">Who We Are</small>
                    <h1 class="mt-2 mb-4">Most Effective Creative Service Provider For Companies</h1>
                    <p class="mb-4">Eirmod est dolor nonumy sea amet dolore erat sit dolor et dolor vero. Tempor ipsum at justo amet at ipsum justo. Aiam kasd sea sit dolor duo elitr dolor amet, justo est ipsum amet dolor ut ipsum. Labore diam et nonumy amet dolores. Volup sit labore dolores erat, magna justo sed lorem kasd ea dolor. Labore sit clita invidunt, est dolores lorem sed ipsum kasd no amet ipsum.</p>
                    <a href="" class="btn btn-primary py-md-2 px-md-4 font-weight-semi-bold">Read More</a>
                </div>
            </div>
            <div class="row mt-4">
                <div class="col-md-4">
                    <div class="d-flex align-items-center border mb-4 mb-lg-0 p-4" style="height: 120px;">
                        <i class="fa fa-2x fa-map-marker-alt text-primary mr-3"></i>
                        <div class="d-flex flex-column">
                            <h5 class="font-weight-bold">Our Office</h5>
                            <p class="m-0">123 Street, New York, USA</p>
                        </div>
                    </div>
                </div>
                <div class="col-md-4">
                    <div class="d-flex align-items-center border mb-4 mb-lg-0 p-4" style="height: 120px;">
                        <i class="fa fa-2x fa-envelope-open text-primary mr-3"></i>
                        <div class="d-flex flex-column">
                            <h5 class="font-weight-bold">Email Us</h5>
                            <p class="m-0">info@example.com</p>
                        </div>
                    </div>
                </div>
                <div class="col-md-4">
                    <div class="d-flex align-items-center border mb-4 mb-lg-0 p-4" style="height: 120px;">
                        <i class="fas fa-2x fa-phone-alt text-primary mr-3"></i>
                        <div class="d-flex flex-column">
                            <h5 class="font-weight-bold">Call Us</h5>
                            <p class="m-0">+012 345 6789</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <!-- About End -->


    <!-- Services Start -->
    <div class="container-fluid pt-5 pb-3">
        <div class="container">
            <div class="row">
                <div class="col-lg-4 mb-5">
                    <small class="bg-primary text-white text-uppercase font-weight-bold px-1">What we do</small>
                    <h1 class="mt-2 mb-3">We Offer Creative Services</h1>
                    <h4 class="font-weight-normal text-muted mb-4">Lorem ut kasd dolores elitr sed est duo ea ipsum justo diam, est erat lorem. Est magna sea clita diam tempor elitr</h4>
                    <a href="" class="btn btn-primary py-md-2 px-md-4 font-weight-semi-bold">Discover More</a>
                </div>
                <div class="col-lg-8">
                    <div class="row">
                        <div class="col-md-6 mb-5">
                            <div class="d-flex">
                                <i class="fa fa-3x fa-laptop-code text-primary mr-4"></i>
                                <div class="d-flex flex-column">
                                    <h4 class="font-weight-bold mb-3">Web Design</h4>
                                    <p>Et kasd justo clita amet kasd, vero amet vero eos kasd diam justo, ipsum diam sed elitr erat</p>
                                    <a class="font-weight-semi-bold" href="">Read More <i class="fa fa-angle-double-right"></i></a>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-6 mb-5">
                            <div class="d-flex">
                                <i class="fa fa-3x fa-code text-primary mr-4"></i>
                                <div class="d-flex flex-column">
                                    <h4 class="font-weight-bold mb-3">Development</h4>
                                    <p>Et kasd justo clita amet kasd, vero amet vero eos kasd diam justo, ipsum diam sed elitr erat</p>
                                    <a class="font-weight-semi-bold" href="">Read More <i class="fa fa-angle-double-right"></i></a>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-6 mb-5">
                            <div class="d-flex">
                                <i class="fa fa-3x fa-envelope-open-text text-primary mr-4"></i>
                                <div class="d-flex flex-column">
                                    <h4 class="font-weight-bold mb-3">Marketing</h4>
                                    <p>Et kasd justo clita amet kasd, vero amet vero eos kasd diam justo, ipsum diam sed elitr erat</p>
                                    <a class="font-weight-semi-bold" href="">Read More <i class="fa fa-angle-double-right"></i></a>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-6 mb-5">
                            <div class="d-flex">
                                <i class="fa fa-3x fa-chart-line text-primary mr-4"></i>
                                <div class="d-flex flex-column">
                                    <h4 class="font-weight-bold mb-3">Strategy</h4>
                                    <p>Et kasd justo clita amet kasd, vero amet vero eos kasd diam justo, ipsum diam sed elitr erat</p>
                                    <a class="font-weight-semi-bold" href="">Read More <i class="fa fa-angle-double-right"></i></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <!-- Services End -->


    <!-- Features Start -->
    <div class="container-fluid pt-5 pb-2">
        <div class="container">
            <div class="row">
                <div class="col-lg-6 mb-5">
                    <small class="bg-primary text-white text-uppercase font-weight-bold px-1">Why Choose Us</small>
                    <h1 class="mt-2 mb-3">25 Years Expereince</h1>
                    <h4 class="font-weight-normal text-muted mb-4">Lorem ut kasd dolores elitr sed est duo ea ipsum justo diam, est erat lorem</h4>
                    <div class="list-inline mb-4">
                        <p class="font-weight-semi-bold mb-2"><i class="fa fa-angle-right text-primary mr-2"></i>Lorem ut kasd dolores elitr</p>
                        <p class="font-weight-semi-bold mb-2"><i class="fa fa-angle-right text-primary mr-2"></i>Jsto dolor lorem ipsum</p>
                        <p class="font-weight-semi-bold mb-2"><i class="fa fa-angle-right text-primary mr-2"></i>Diama ipsum est dolor</p>
                    </div>
                    <a href="" class="btn btn-primary py-md-2 px-md-4 font-weight-semi-bold">Learn More</a>
                </div>
                <div class="col-lg-6">
                    <div class="row">
                        <div class="col-sm-6 pb-1">
                            <div class="d-flex flex-column align-items-center border px-4 mb-4">
                                <h2 class="display-3 text-primary mb-3" data-toggle="counter-up">25</h2>
                                <h5 class="font-weight-bold mb-4">Years Expereince</h5>
                            </div>
                        </div>
                        <div class="col-sm-6 pb-1">
                            <div class="d-flex flex-column align-items-center border px-4 mb-4">
                                <h2 class="display-3 text-primary mb-3" data-toggle="counter-up">225</h2>
                                <h5 class="font-weight-bold mb-4">SKilled Experts</h5>
                            </div>
                        </div>
                        <div class="col-sm-6 pb-1">
                            <div class="d-flex flex-column align-items-center border px-4 mb-4">
                                <h2 class="display-3 text-primary mb-3" data-toggle="counter-up">1050</h2>
                                <h5 class="font-weight-bold mb-4">Happy Clients</h5>
                            </div>
                        </div>
                        <div class="col-sm-6 pb-1">
                            <div class="d-flex flex-column align-items-center border px-4 mb-4">
                                <h2 class="display-3 text-primary mb-3" data-toggle="counter-up">2500</h2>
                                <h5 class="font-weight-bold mb-4">Complete Projects</h5>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <!-- Features End -->


    <!-- Team Start -->
    <div class="container-fluid pt-5">
        <div class="container">
            <div class="row">
                <div class="col-lg-4 mb-5">
                    <small class="bg-primary text-white text-uppercase font-weight-bold px-1">Meet The Team</small>
                    <h1 class="mt-2 mb-3">Meet Experts of Behind Work</h1>
                    <h4 class="font-weight-normal text-muted mb-4">Eirmod diam magna sed sea rebum, elitr diam dolor lorem ipsum, ipsum stet magna ea diam vero stet vero</h4>
                    <a href="" class="btn btn-primary py-md-2 px-md-4 font-weight-semi-bold">Meet All Experts</a>
                </div>
                <div class="col-lg-8 mb-5">
                    <div class="owl-carousel team-carousel">
                        <div class="team-item">
                            <div class="position-relative">
                                <img class="img-fluid w-100" src="img/team-1.jpg" alt="">
                                <div class="team-overlay position-absolute d-flex align-items-center justify-content-center m-3">
                                    <div class="d-flex align-items-center justify-content-start">
                                        <a class="btn btn-outline-secondary rounded-circle text-center mr-2 px-0" style="width: 38px; height: 38px;" href="#"><i class="fab fa-twitter"></i></a>
                                        <a class="btn btn-outline-secondary rounded-circle text-center mr-2 px-0" style="width: 38px; height: 38px;" href="#"><i class="fab fa-facebook-f"></i></a>
                                        <a class="btn btn-outline-secondary rounded-circle text-center px-0" style="width: 38px; height: 38px;" href="#"><i class="fab fa-linkedin-in"></i></a>
                                    </div>
                                </div>
                            </div>
                            <div class="border border-top-0 text-center" style="padding: 30px;">
                                <h5 class="font-weight-bold">John Doe</h5>
                                <span>CEO, Founder</span>
                            </div>
                        </div>
                        <div class="team-item">
                            <div class="position-relative">
                                <img class="img-fluid w-100" src="img/team-2.jpg" alt="">
                                <div class="team-overlay position-absolute d-flex align-items-center justify-content-center m-3">
                                    <div class="d-flex align-items-center justify-content-start">
                                        <a class="btn btn-outline-secondary rounded-circle text-center mr-2 px-0" style="width: 38px; height: 38px;" href="#"><i class="fab fa-twitter"></i></a>
                                        <a class="btn btn-outline-secondary rounded-circle text-center mr-2 px-0" style="width: 38px; height: 38px;" href="#"><i class="fab fa-facebook-f"></i></a>
                                        <a class="btn btn-outline-secondary rounded-circle text-center px-0" style="width: 38px; height: 38px;" href="#"><i class="fab fa-linkedin-in"></i></a>
                                    </div>
                                </div>
                            </div>
                            <div class="border border-top-0 text-center" style="padding: 30px;">
                                <h5 class="font-weight-bold">Kate Wilson</h5>
                                <span>Designer</span>
                            </div>
                        </div>
                        <div class="team-item">
                            <div class="position-relative">
                                <img class="img-fluid w-100" src="img/team-3.jpg" alt="">
                                <div class="team-overlay position-absolute d-flex align-items-center justify-content-center m-3">
                                    <div class="d-flex align-items-center justify-content-start">
                                        <a class="btn btn-outline-secondary rounded-circle text-center mr-2 px-0" style="width: 38px; height: 38px;" href="#"><i class="fab fa-twitter"></i></a>
                                        <a class="btn btn-outline-secondary rounded-circle text-center mr-2 px-0" style="width: 38px; height: 38px;" href="#"><i class="fab fa-facebook-f"></i></a>
                                        <a class="btn btn-outline-secondary rounded-circle text-center px-0" style="width: 38px; height: 38px;" href="#"><i class="fab fa-linkedin-in"></i></a>
                                    </div>
                                </div>
                            </div>
                            <div class="border border-top-0 text-center" style="padding: 30px;">
                                <h5 class="font-weight-bold">John Brown</h5>
                                <span>Developer</span>
                            </div>
                        </div>
                        <div class="team-item">
                            <div class="position-relative">
                                <img class="img-fluid w-100" src="img/team-4.jpg" alt="">
                                <div class="team-overlay position-absolute d-flex align-items-center justify-content-center m-3">
                                    <div class="d-flex align-items-center justify-content-start">
                                        <a class="btn btn-outline-secondary rounded-circle text-center mr-2 px-0" style="width: 38px; height: 38px;" href="#"><i class="fab fa-twitter"></i></a>
                                        <a class="btn btn-outline-secondary rounded-circle text-center mr-2 px-0" style="width: 38px; height: 38px;" href="#"><i class="fab fa-facebook-f"></i></a>
                                        <a class="btn btn-outline-secondary rounded-circle text-center px-0" style="width: 38px; height: 38px;" href="#"><i class="fab fa-linkedin-in"></i></a>
                                    </div>
                                </div>
                            </div>
                            <div class="border border-top-0 text-center" style="padding: 30px;">
                                <h5 class="font-weight-bold">Paul Watson</h5>
                                <span>Marketer</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <!-- Team End -->


    <!-- Pricing Plan Start -->
    <div class="container-fluid pt-5">
        <div class="container">
            <div class="row">
                <div class="col-lg-7">
                    <div class="row">
                        <div class="col-md-6 mb-5">
                            <div class="d-flex flex-column align-items-center justify-content-center bg-primary p-4">
                                <h3>Basic</h3>
                                <h1 class="display-4 mb-0">
                                    <small class="align-top"
                                        style="font-size: 22px; line-height: 45px;">$</small>49<small
                                        class="align-bottom" style="font-size: 16px; line-height: 40px;">/
                                        Mo</small>
                                </h1>
                            </div>
                            <div class="border border-top-0 d-flex flex-column align-items-center py-4">
                                <p>HTML5 & CSS3</p>
                                <p>Bootstrap 4</p>
                                <p>Responsive Layout</p>
                                <p>Compatible With All Browsers</p>
                                <a href="" class="btn btn-primary py-md-2 px-md-4 font-weight-semi-bold my-2">Order Now</a>
                            </div>
                        </div>
                        <div class="col-md-6 mb-5">
                            <div class="d-flex flex-column align-items-center justify-content-center bg-primary p-4">
                                <h3>Premium</h3>
                                <h1 class="display-4 mb-0">
                                    <small class="align-top"
                                        style="font-size: 22px; line-height: 45px;">$</small>99<small
                                        class="align-bottom" style="font-size: 16px; line-height: 40px;">/
                                        Mo</small>
                                </h1>
                            </div>
                            <div class="border border-top-0 d-flex flex-column align-items-center py-4">
                                <p>HTML5 & CSS3</p>
                                <p>Bootstrap 4</p>
                                <p>Responsive Layout</p>
                                <p>Compatible With All Browsers</p>
                                <a href="" class="btn btn-primary py-md-2 px-md-4 font-weight-semi-bold my-2">Order Now</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-lg-5 mb-5">
                    <small class="d-inline bg-primary text-white text-uppercase font-weight-bold px-1">Our Pricing Plan</small>
                    <h1 class="mt-2 mb-3">We Offer Affordable and Flexible Packages</h1>
                    <h4 class="font-weight-normal text-muted mb-4">Lorem ut kasd dolores elitr sed est duo ea ipsum justo diam, est erat lorem. Est magna sea clita diam tempor elitr</h4>
                    <h5 class="font-weight-bold mb-4">Need A Custom Package?</h5>
                    <a href="" class="btn btn-primary py-md-2 px-md-4 font-weight-semi-bold">Contact Now</a>
                </div>
            </div>
        </div>
    </div>
    <!-- Pricing Plan End -->


    <!-- Testimonial Start -->
    <div class="container-fluid pt-5">
        <div class="container">
            <div class="row">
                <div class="col-lg-4 mb-5">
                    <small class="bg-primary text-white text-uppercase font-weight-bold px-1">What clients say</small>
                    <h1 class="mt-2 mb-3">Clients Say About Our Services</h1>
                    <h4 class="font-weight-normal text-muted mb-4">Lorem ut kasd elitr sed est duo ea ipsum justo diam, est erat lorem clita diam elitr</h4>
                    <a href="" class="btn btn-primary py-md-2 px-md-4 font-weight-semi-bold">Submit Review</a>
                </div>
                <div class="col-lg-8 mb-5">
                    <div class="owl-carousel testimonial-carousel">
                        <div class="testimonial-item">
                            <div class="testimonial-text position-relative border mb-4" style="padding: 25px 30px;">
                                Sed ea amet kasd elitr stet nonumy, stet rebum et ipsum est duo elitr eirmod clita lorem. Dolores tempor voluptua ipsum sanctus clita
                            </div>
                            <div class="d-flex align-items-center">
                                <img class="img-fluid rounded-circle" src="img/testimonial-1.jpg" style="width: 80px; height: 80px;" alt="Image">
                                <div class="pl-4">
                                    <h6 class="font-weight-bold">Client Name</h6>
                                    <i class="text-muted">Profession</i>
                                </div>
                            </div>
                        </div>
                        <div class="testimonial-item">
                            <div class="testimonial-text position-relative border mb-4" style="padding: 25px 30px;">
                                Sed ea amet kasd elitr stet nonumy, stet rebum et ipsum est duo elitr eirmod clita lorem. Dolores tempor voluptua ipsum sanctus clita
                            </div>
                            <div class="d-flex align-items-center">
                                <img class="img-fluid rounded-circle" src="img/testimonial-2.jpg" style="width: 80px; height: 80px;" alt="Image">
                                <div class="pl-4">
                                    <h6 class="font-weight-bold">Client Name</h6>
                                    <i class="text-muted">Profession</i>
                                </div>
                            </div>
                        </div>
                        <div class="testimonial-item">
                            <div class="testimonial-text position-relative border mb-4" style="padding: 25px 30px;">
                                Sed ea amet kasd elitr stet nonumy, stet rebum et ipsum est duo elitr eirmod clita lorem. Dolores tempor voluptua ipsum sanctus clita
                            </div>
                            <div class="d-flex align-items-center">
                                <img class="img-fluid rounded-circle" src="img/testimonial-3.jpg" style="width: 80px; height: 80px;" alt="Image">
                                <div class="pl-4">
                                    <h6 class="font-weight-bold">Client Name</h6>
                                    <i class="text-muted">Profession</i>
                                </div>
                            </div>
                        </div>
                        <div class="testimonial-item">
                            <div class="testimonial-text position-relative border mb-4" style="padding: 25px 30px;">
                                Sed ea amet kasd elitr stet nonumy, stet rebum et ipsum est duo elitr eirmod clita lorem. Dolores tempor voluptua ipsum sanctus clita
                            </div>
                            <div class="d-flex align-items-center">
                                <img class="img-fluid rounded-circle" src="img/testimonial-4.jpg" style="width: 80px; height: 80px;" alt="Image">
                                <div class="pl-4">
                                    <h6 class="font-weight-bold">Client Name</h6>
                                    <i class="text-muted">Profession</i>
                                </div>
                            </div>
                        </div>
                        <div class="testimonial-item">
                            <div class="testimonial-text position-relative border mb-4" style="padding: 25px 30px;">
                                Sed ea amet kasd elitr stet nonumy, stet rebum et ipsum est duo elitr eirmod clita lorem. Dolores tempor voluptua ipsum sanctus clita
                            </div>
                            <div class="d-flex align-items-center">
                                <img class="img-fluid rounded-circle" src="img/testimonial-5.jpg" style="width: 80px; height: 80px;" alt="Image">
                                <div class="pl-4">
                                    <h6 class="font-weight-bold">Client Name</h6>
                                    <i class="text-muted">Profession</i>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <!-- Testimonial End -->


    <!-- Blog Start -->
    <div class="container-fluid pt-5">
        <div class="container">
            <div class="text-center">
                <small class="bg-primary text-white text-uppercase font-weight-bold text-center px-1">Our Blog</small>
                <h1 class="mt-2 mb-5">Latest From Blog</h1>
            </div>
            <div class="row">
                <div class="col-md-6 mb-5">
                    <div class="position-relative">
                        <img class="img-fluid w-100" src="img/blog-1.jpg" alt="">
                        <div class="position-absolute bg-primary d-flex flex-column align-items-center justify-content-center"
                            style="width: 80px; height: 80px; bottom: 0; left: 0;">
                            <h6 class="text-uppercase mt-2 mb-n2">Jan</h6>
                            <h1 class="m-0">01</h1>
                        </div>
                    </div>
                    <div class="border border-top-0" style="padding: 30px;">
                        <div class="d-flex mb-3">
                            <div class="d-flex align-items-center">
                                <img class="rounded-circle" style="width: 40px; height: 40px;" src="img/user.jpg" alt="">
                                <a class="text-muted ml-2" href="">John Doe</a>
                            </div>
                            <div class="d-flex align-items-center ml-4">
                                <i class="far fa-bookmark text-primary"></i>
                                <a class="text-muted ml-2" href="">Web Design</a>
                            </div>
                        </div>
                        <a class="h5 font-weight-bold" href="">Kasd tempor diam sea justo dolor kasd amet dolor labore amet clita est diam dolor</a>
                    </div>
                </div>
                <div class="col-md-6 mb-5">
                    <div class="position-relative">
                        <img class="img-fluid w-100" src="img/blog-2.jpg" alt="">
                        <div class="position-absolute bg-primary d-flex flex-column align-items-center justify-content-center"
                            style="width: 80px; height: 80px; bottom: 0; left: 0;">
                            <h6 class="text-uppercase mt-2 mb-n2">Jan</h6>
                            <h1 class="m-0">01</h1>
                        </div>
                    </div>
                    <div class="border border-top-0" style="padding: 30px;">
                        <div class="d-flex mb-3">
                            <div class="d-flex align-items-center">
                                <img class="rounded-circle" style="width: 40px; height: 40px;" src="img/user.jpg" alt="">
                                <a class="text-muted ml-2" href="">John Doe</a>
                            </div>
                            <div class="d-flex align-items-center ml-4">
                                <i class="far fa-bookmark text-primary"></i>
                                <a class="text-muted ml-2" href="">Web Design</a>
                            </div>
                        </div>
                        <a class="h5 font-weight-bold" href="">Kasd tempor diam sea justo dolor kasd amet dolor labore amet clita est diam dolor</a>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <!-- Blog End -->
</template>

