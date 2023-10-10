import { createRouter, createWebHistory } from 'vue-router'
// const array = require('./../pages')

// let res = await this.axios.get("/api/cursosAll/" + this.id_carrera);
const routes = [
  {
    path: '/',
    name: 'appWrapper',
    component: () => import('@/pages/AppWrapper.vue'),
    children: [
      {
        path: '/',
        name: 'homeApp',
        component: () => import('@/views/HomeCustom.vue')
      },
      {
        path: '/convocatorias/:tipo_conv',
        name: 'convocatorias',
        component: () => import('@/views/Convocatorias/ConvocatoriasView.vue')
      },
      {
        path: '/detalleConvocatoria/:idConv',
        name: 'detalleConvocatoria',
        component: () => import('@/views/Convocatorias/DetalleConvocatoria.vue')
      },
      {
        path: '/cursos/:tipo_cur',
        name: 'cursos',
        component: () => import('@/views/Cursos/CursosView.vue')
      },
      {
        path: '/detalleCurso/:idCur',
        name: 'detalleCurso',
        component: () => import('@/views/Cursos/DetalleCurso.vue')
      },
      {
        path: '/servicios',
        name: 'servicios',
        component: () => import('@/views/Servicios/ServiciosView.vue')
      },
      {
        path: '/DetalleServicio/:idServ',
        name: 'detalleServicio',
        component: () => import('@/views/Servicios/DetalleServicio.vue')
      },
      {
        path: '/ofertas',
        name: 'ofertas',
        component: () => import('@/views/Ofertas/OfertasView.vue')
      },
      {
        path: '/detalleOferta/:idOfer',
        name: 'detalleOfeta',
        component: () => import('@/views/Ofertas/DetalleOferta.vue')
      },
      {
        path: '/publicaciones',
        name: 'publicacionesView',
        component: () => import('@/views/Publicaciones/PublicacionesView.vue')
      },
      {
        path: '/detallePublicacion/:idPub',
        name: 'detallePublicacion',
        component: () => import('@/views/Publicaciones/DetallePublicacion.vue')
      },
      {
        path: '/gacetas',
        name: 'GacetaView',
        component: () => import('@/views/Gaceta/GacetaView.vue')
      },
      {
        path: '/DetalleGaceta/:idGac',
        name: 'detalleGaceta',
        component: () => import('@/views/Gaceta/DetalleGaceta.vue')
      },
      {
        path: '/eventos',
        name: 'eventosView',
        component: () => import('@/views/Eventos/EventosView.vue')
      },
      {
        path: '/detalleEvento/:idEv',
        name: 'detalleEvento',
        component: () => import('@/views/Eventos/DetalleEvento.vue')
      },
      {
        path: '/videos',
        name: 'videosView',
        component: () => import('@/views/Videos/VideosView.vue')
      },
      {
        path: '/detalleVideo/:idVid',
        name: 'detalleVideo',
        component: () => import('@/views/Videos/DetalleVideo.vue')
      },
      {
        path: '/about',
        name: 'aboutView',
        component: () => import('@/views/AboutView.vue')
      },
      {
        path: '/contacto',
        name: 'contactoView',
        component: () => import('@/views/informacion/ContactoView.vue')
      },
      {
        path: '/misionvision',
        name: 'misionvisionView',
        component: () => import('@/views/informacion/MisionvisionView.vue')
      },
      {
        path: '/historia',
        name: 'historiaView',
        component: () => import('@/views/informacion/HistoriaView.vue')
      },
      {
        path: '/perfil',
        name: 'perfilview',
        component: () => import('@/views/informacion/PerfilView.vue')
      },
      {
        path: '/plan',
        name: 'planView',
        component: () => import('@/views/informacion/PlanView.vue')
      },
      {
        path: '/autoridades',
        name: 'autoridadesView',
        component: () => import('@/views/informacion/AutoridadesView.vue')
      },
    ]
  },
  {
    path: '/:pathMatch(.*)*',
    name: '404Page',
    component: () => import('@/pages/404Page.vue')
  },
  {
    path: '/error_network',
    name: 'error_network',
    component: () => import('@/pages/ErrorNetwork.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
