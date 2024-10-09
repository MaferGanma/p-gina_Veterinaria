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
          <h4 class="mb-3 countdown-title" v-if="!isEventStarted">Faltan para el evento:</h4>
          <div class="d-flex justify-content-center" v-if="!isEventStarted">
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
          <div v-if="isEventStarted" class="event-message text-white">
            <h4 class="mb-3 countdown-title">¡El congreso ya comenzó!</h4>
            <p>El Congreso Nacional de Industria Textil y Nanotecnología se llevará a cabo del 18 al 20 de noviembre.
            </p>
          </div>
        </div>
        <!-- Countdown Timer End -->
      </div>
    </div>
  </div>
  <!-- Header End -->

  <!-- Feature Start -->
  <div class="container-fluid pb-5" style="padding-top: 100px; position: relative;">
    <img src="@/assets/expositores/TEXTIL.jpg" alt="Descripción de la imagen"
      class="img-fluid mx-auto d-block img-redondeada" style="max-width: 100%; height: auto;">
    <div class="container pb-5">
      <!-- Additional Features Start -->
      <div class="container mt-5">
        <!-- Expositores -->
        <div class="text-center mb-4">
          <i class="fa fa-users fa-3x" style="color: #394285;"></i>
          <h2 class="mt-2">Expositores</h2>
          <!-- Expositores Photos Start -->
          <div class="row">
            <div class="col-md-4" v-for="expositor in expositores" :key="expositor.id">
              <div class="expositor-card">
                <img :src="expositor.photo" alt="Expositor" class="img-fluid rounded-circle mb-2">
                <h4>{{ expositor.name }}</h4>
                <p>{{ expositor.talkTitle }}</p>
              </div>
            </div>
          </div>
          <!-- Expositores Photos End -->
        </div>

        <!-- Cronograma -->
        <div class="text-center mb-4">
          <i class="fa fa-calendar-alt fa-3x" style="color: #394285;"></i>
          <h2 class="mt-2">Cronograma de ponencias Congreso Industria Textil y Nanotecnología</h2>
        </div>

        <div class="table-container">
          <h2>Día 1: Lunes 18 de noviembre de 2024</h2>
          <table class="table">
            <thead>
              <tr>
                <th>Hora</th>
                <th>Título de la ponencia</th>
                <th>Exponente</th>
                <th>Universidad o Empresa</th>
                <th>País</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>11:00 - 12:20</td>
                <td> </td>
                <td> </td>
                <td>Cancillería</td>
                <td>Bolivia</td>
              </tr>
              <tr>
                <td>16:00 - 16:50</td>
                <td>Innovación y sostenibilidad: Aplicaciones de la celulosa de bambú en la industria moderna</td>
                <td>Willam Ricardo Esparza Encalada</td>
                <td>Universidad Técnica del Norte</td>
                <td>Ibarra - Ecuador</td>
              </tr>
              <tr>
                <td>16:50 - 17:40</td>
                <td> </td>
                <td> </td>
                <td> </td>
                <td> </td>
              </tr>
              <tr>
                <td>17:40 - 18:30</td>
                <td>La produccion primaria de fibra de llama y su relación con el sector textil de moda</td>
                <td>Hugo Lamas</td>
                <td>Universidad Nacional de Jujuy</td>
                <td>Jujuy - Argentina</td>
              </tr>
              <tr>
                <td>18:30 - 19:20</td>
                <td> </td>
                <td> </td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <td>19:20 - 20:00</td>
                <td> </td>
                <td> </td>
                <td></td>
                <td> </td>
              </tr>
            </tbody>
          </table>
        </div>
        <br>
        <div class="table-container">
          <h2>Día 2: Martes 19 de noviembre de 2024</h2>
          <table class="table">
            <thead>
              <tr>
                <th>Hora</th>
                <th>Título de la ponencia</th>
                <th>Exponente</th>
                <th>Universidad o Empresa</th>
                <th>País</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>16:00 - 16:50</td>
                <td>Aplicación de un no tejido a base de la fibra de coco en la agricultura hidropónica.</td>
                <td>Valeria Verónica Chugá Chamorro</td>
                <td>Universidad Técnica del Norte</td>
                <td>Ibarra - Ecuador</td>
              </tr>
              <tr>
                <td>16:50 - 17:40</td>
                <td> </td>
                <td> </td>
              </tr>
              <tr>
                <td>17:40 - 18:30</td>
                <td> </td>
                <td> </td>
                <td> </td>
                <td> </td>
              </tr>
              <tr>
                <td>18:30 - 19:20</td>
                <td>Aplicaciones de la Nanotecnología en el área textil</td>
                <td>Diego Alirio Chambi Aguilar</td>
                <td>Viceministerio de Políticas de Industrialización 
                  Ministerio de Desarrollo Productivo y Económia Plural</td>
                <td>Bolivia</td>
              </tr>
              <tr>
                <td>19:20 - 20:00</td>
                <td> </td>
                <td> </td>
                <td> </td>
                <td> </td>
              </tr>
            </tbody>
          </table>
        </div>
        <br>
        <div class="table-container">
          <h2>Día 3: Miércoles 20 de noviembre de 2024</h2>
          <table class="table">
            <thead>
              <tr>
                <th>Hora</th>
                <th>Título de la ponencia</th>
                <th>Exponente</th>
                <th>Universidad o Empresa</th>
                <th>País</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>16:00 - 17:00</td>
                <td>Normas Bolivianas apoyando a la industria - IBNORCA</td>
                <td>Alejandra Torrelio</td>
                <td>IBNORCA</td>
                <td>Bolivia</td>
              </tr>
              <tr>
                <td>17:00 - 18:00</td>
                <td>Nanotecnologia en textiles: manipulacion de fenomenos quimicos y fisicos para crear fibras multifuncionales</td>
                <td>Juan Hinestroza</td>
                <td>Cornell University</td>
                <td>EEUU</td>
              </tr>
              <tr>
                <td>18:00 - 19:00</td>
                <td>Pasarela de moda UPCYCLING</td>
                <td>Organizadores</td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <td>19:00 - 20:00</td>
                <td>Pasarela de moda UPCYCLING</td>
                <td>Organizadores</td>
                <td></td>
                <td></td>
              </tr>
            </tbody>
          </table>
        </div>
        <br>
        <!---->

        <!-- Inscripciones -->
        <div class="text-center mb-4">
          <i class="fa fa-pen-alt fa-3x" style="color: #394285;"></i>
          <h2 class="mt-2">Inscripciones</h2>
        </div>
      </div>
      <!-- Contact Info -->
      <div class="row">
        <div class="col-md-4">
          <div class="d-flex mb-4 mb-lg-0">
            <div
              class="d-flex flex-shrink-0 align-items-center justify-content-center bg-primary mr-3 cuadrado-redondeado">
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
            <div
              class="d-flex flex-shrink-0 align-items-center justify-content-center bg-primary mr-3 cuadrado-redondeado">
              <i class="fa fa-2x fa-phone text-white"></i>
            </div>
            <div class="d-flex flex-column">
              <h5 class="">Celular</h5>
              <p class="m-0 ">75408968</p>
              <p class="m-0 ">{{ Institucion.institucion_celular2 }}</p>
            </div>
          </div>
        </div>
        <div class="col-md-4">
          <div class="d-flex mb-4 mb-lg-0">
            <div
              class="d-flex flex-shrink-0 align-items-center justify-content-center bg-primary mr-3 cuadrado-redondeado">
              <i class="fa fa-2x fa-map-marker text-white"></i>
            </div>
            <div class="d-flex flex-column">
              <h5 class="">Ubicación</h5>
              <p class="m-0 ">{{ Institucion.institucion_direccion }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- Location Icon -->
    <div class="text-center mb-4">
      <i class="fa fa-map-marker-alt fa-3x" style="color: #394285;"></i>
    </div>
    <!-- Location Title and Map -->
    <h2 class="text-center mb-4">Ubicación</h2>
    <!-- <iframe :src="Institucion.institucion_api_google_map" width="100%" height="600px" frameborder="0"></iframe> -->
    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3825.554706634767!2d-68.1355719!3d-16.4980703!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x915f21d239bc736d%3A0xa771bdd9fa67fc3b!2scentro%20de%20comunicaciones%20la%20paz!5e0!3m2!1sen!2sbo!4v1728500866473!5m2!1sen!2sbo" width="100%" height="600px" frameborder="0"></iframe>
  </div>
  <!-- Feature End -->
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

      isEventStarted: false, // Add this property to control event start message

      expositores: [
        { id: 1, name: 'Willam Ricardo Esparza Encalada', talkTitle: 'Universidad Técnica del Norte', photo: require('@/assets/expositores/exp1.jpg') },
        { id: 2, name: 'Hugo Lamas', talkTitle: 'Universidad Nacional de Jujuy', photo: require('@/assets/expositores/exp1.jpg') },
        { id: 3, name: 'Valeria Verónica Chugá Chamorro', talkTitle: 'Universidad Técnica del Norte', photo: require('@/assets/expositores/Valeria.jpg') },
        { id: 4, name: 'Diego Alirio Chambi Aguilar', talkTitle: 'Viceministerio de Políticas de Industrialización ', photo: require('@/assets/expositores/exp1.jpg') },
        { id: 5, name: 'Alejandra Torrelio', talkTitle: 'IBNORCA', photo: require('@/assets/expositores/Alejandra.jpeg') },
        { id: 7, name: 'Juan Hinestroza', talkTitle: 'Cornell University', photo: require('@/assets/expositores/Juan.jpg') }
        // Añadir más expositores según sea necesario
      ]
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
    updateCountdown() {
      const now = new Date();
      const timeDiff = this.eventDate - now;

      if (timeDiff <= 0) {
        this.isEventStarted = true;
        return;
      }

      this.isEventStarted = false;
      this.days = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
      this.hours = Math.floor((timeDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      this.minutes = Math.floor((timeDiff % (1000 * 60 * 60)) / (1000 * 60));
      this.seconds = Math.floor((timeDiff % (1000 * 60)) / 1000);
    },
  },
  mounted() {
    this.getLinks();
    setInterval(this.updateCountdown, 1000);
  }
};
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

.countdown-title {
  color: #ffffff;
  /* Color applied to the text */
}

.event-message {
  font-size: 1.2rem;
  font-weight: bold;
}

/*Expositores Estilos */
.expositor-card {
  text-align: center;
  margin-bottom: 20px;
}

.expositor-card img {
  width: 150px;
  height: 150px;
  object-fit: cover;
}

h4 {
  margin: 10px 0;
}

p {
  color: black;
}

/*Redondear Imagen */
.img-redondeada {
  border-radius: 15px;
  /* Ajusta el valor para el redondeo que desees */
}

/*Redondear Cuadros de Contacto */
.cuadrado-redondeado {
  height: 100px;
  width: 100px;
  border-radius: 15px;
  /* Ajusta el valor según lo desees */
}

/*Estilos Tabla*/
.table-container {
  border-radius: 8px;
  overflow: hidden;
  border: 1px solid #ddd;
  background-color: #fff;
  margin-bottom: 40px;
  margin: 0 auto; /* Center the table container */
}

.table-container h2 {
  background-color: #394285;
  color: #fff;
  padding: 10px;
  margin: 0;
  text-align: center;
}

.table {
  width: 100%;
  border-collapse: collapse;
}

.table th,
.table td {
  padding: 12px;
  border: 1px solid #ddd;
  text-align: left;
}

.table th {
  background-color: #394285;
  color: #fff;
}

.table td {
  background-color: #fff;
  color: #000;
}

/* Responsive Styles */
@media (max-width: 768px) {
  .table th, .table td {
    padding: 8px;
  }
}

</style>