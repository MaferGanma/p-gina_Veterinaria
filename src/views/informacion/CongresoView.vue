<template>
  <!-- Header Start -->
  <div class="container-fluid page-header banner-img">
    <div class="container">
      <div class="d-flex flex-column align-items-center justify-content-center" style="min-height: 400px">
        <h3 class="display-4 text-white text-uppercase" style="text-align: center;">
          CONGRESO NACIONAL de INDUSTRIA TEXTIL y NANOTECNOLOGÍA
        </h3>
        <div class="d-inline-flex text-white mb-4">
          <p class="m-0 text-uppercase"><a class="text-white" href="/">INICIO</a></p>
          <i class="fa fa-angle-double-right pt-1 px-3"></i>
        </div>
        <!-- Countdown Timer Start -->
        <div class="countdown-timer text-white text-center">
          <h4 class="mb-3">Faltan para el evento:</h4>
          <div class="d-flex justify-content-center">
            <div class="timer-section">
              <span class="timer-value">{{ days }}</span>
              <span class="timer-label">Días</span>
            </div>
            <div class="timer-section">
              <span class="timer-value">{{ hours }}</span>
              <span class="timer-label">Horas</span>
            </div>
            <div class="timer-section">
              <span class="timer-value">{{ minutes }}</span>
              <span class="timer-label">Minutos</span>
            </div>
            <div class="timer-section">
              <span class="timer-value">{{ seconds }}</span>
              <span class="timer-label">Segundos</span>
            </div>
          </div>
        </div>
        <!-- Countdown Timer End -->
      </div>
    </div>
  </div>
  <!-- Header End -->

  <!-- Feature Start -->
  <div class="container-fluid pb-5" style="padding-top: 100px; position: relative;">
    <img src="https://i.imgur.com/VFgwOO3.jpeg" alt="Descripción de la imagen" style="display: block; margin-left: auto; margin-right: auto;">
    <div class="container pb-5">
      <div class="row">
        <div class="col-md-4">
          <div class="d-flex mb-4 mb-lg-0">
            <div class="d-flex flex-shrink-0 align-items-center justify-content-center bg-primary mr-3" style="height: 100px; width: 100px;">
              <i class="fa fa-2x fa-envelope text-white"></i>
            </div>
            <div class="d-flex flex-column">
              <h5 class="">Correo Electronico</h5>
              <p class="m-0 " style="opacity: 0.5;">{{ Institucion.institucion_correo1 }}</p>
              <p class="m-0 ">{{ Institucion.institucion_correo2 }}</p>
            </div>
          </div>
        </div>
        <div class="col-md-4">
          <div class="d-flex mb-4 mb-lg-0">
            <div class="d-flex flex-shrink-0 align-items-center justify-content-center bg-primary mr-3" style="height: 100px; width: 100px;">
              <i class="fa fa-2x fa-phone text-white"></i>
            </div>
            <div class="d-flex flex-column">
              <h5 class="">Celular</h5>
              <p class="m-0 ">{{ Institucion.institucion_celular1 }}</p>
              <p class="m-0 ">{{ Institucion.institucion_celular2 }}</p>
            </div>
          </div>
        </div>
        <div class="col-md-4">
          <div class="d-flex mb-4 mb-lg-0">
            <div class="d-flex flex-shrink-0 align-items-center justify-content-center bg-primary mr-3" style="height: 100px; width: 100px;">
              <i class="fa fa-2x fa-map-marker text-white"></i>
            </div>
            <div class="d-flex flex-column">
              <h5 class="">Ubicación</h5>
              <p class="m-0 ">{{Institucion.institucion_direccion}}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- <iframe
      :src="Institucion.institucion_api_google_map"
      width="100%"
      height="600px"
      frameborder="0"
    ></iframe> -->
  </div>
  <!-- Feature End -->

  <!-- Professional Photos Start -->
  <div class="container mt-5">
    <h2 class="text-center mb-4">Expositores</h2>
    <div class="row">
      <!-- Iterate over professionals array to display their photos -->
      <div class="col-md-4 mb-4" v-for="(professional, index) in professionals" :key="index">
        <div class="card">
          <img :src="professional.photoUrl" class="card-img-top" alt="Professional Photo">
          <div class="card-body text-center">
            <h5 class="card-title">{{ professional.name }}</h5>
            <p class="card-text">{{ professional.position }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- Professional Photos End -->
</template>

<script>
import { mapState } from "vuex";

export default {
  data() {
    return {
      sopen: false,
      Links: [],
      professionals: [],  // Array to store professional data
      eventDate: new Date('2024-11-18T00:00:00'),  // Updated date and time of the event

      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0,

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
      this.$store.commit("idEncrypt");
      this.openMenu();
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
      this.imgheader();
    },
    imgheader() {
      let img_electronica = '/assets/img/electronica-header2.jpg';
      let img_ambiental = "/assets/img/img-ambiental.jpeg";
      let img_textil = "/assets/img/img-textil.jpg";
      let img_electrica = '/assets/img/img-electricidad.jpg';
      var elemento = document.querySelector(".banner-img");
      // Ingenieria electronica
      if (this.Institucion.institucion_id == 26) { 
        elemento.setAttribute("style", 'background-image:linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url("' + img_electronica + '");');
      } else {
        // Ingenieria ambiental
        if (this.Institucion.institucion_id == 30) {
          elemento.setAttribute("style", 'background-image:linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url("' + img_ambiental + '");');
        } else {
          // Ingenieria electrica
          if (this.Institucion.institucion_id == 27) {
            elemento.setAttribute("style", 'background-image:linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url("' + img_electrica + '");');
          } else {
            // Ingenieria textil
            if (this.Institucion.institucion_id == 29) {
              elemento.setAttribute("style", 'background-image:linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url("' + img_textil + '");');
            }
          }
        }
      }
    },
    async getProfessionals() {
      try {
        let res = await this.axios.get(`/api/professionals/${process.env.VUE_APP_ID_INSTITUCION}`);
        this.professionals = res.data;
      } catch (error) {
        console.log(error);
      }
    },
    updateCountdown() {
      const now = new Date();
      const timeDiff = this.eventDate - now;
      
      if (timeDiff > 0) {
        this.days = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
        this.hours = Math.floor((timeDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        this.minutes = Math.floor((timeDiff % (1000 * 60 * 60)) / (1000 * 60));
        this.seconds = Math.floor((timeDiff % (1000 * 60)) / 1000);
      } else {
        this.days = this.hours = this.minutes = this.seconds = 0;
      }
    }
  },
  created() {
    this.getLinks();
    this.getProfessionals();  // Fetch professional data
  },
  mounted() {
    if (this.getter) {
      this.getLinks();
      this.$store.state.getter = false;
    }
    this.updateCountdown();
    setInterval(this.updateCountdown, 1000);  // Update countdown every second
  },
}
</script>

<style scoped>
.countdown-timer {
  font-family: Arial, sans-serif;
  font-size: 1.2rem;
}

.timer-section {
  margin: 0 10px;
  text-align: center;
}

.timer-value {
  display: block;
  font-size: 2rem;
  font-weight: bold;
}

.timer-label {
  display: block;
  font-size: 1rem;
}
</style>
