<template>
  <v-row>
    <v-col cols="12" md="12" lg="8">
      <v-row>
        <v-col cols="12">
          <base-card class="px-4 pt-4">
            <v-row>
              <v-col cols="12" sm="6" md="6">
                <v-card-title class="pb-0 mb-2"
                  >¡Bienvenido de vuelta, {{this.user.infoUser.datos.nombre}}!</v-card-title
                >
                <v-card-text class="pb-0">
                  <p class="body-2">
                    Has llenado el
                    <span class="font-weight-bold">76%</span>
                    de tus horas del día de hoy. ¡Sigue así!
                  </p>
                </v-card-text>
              </v-col>
              <v-col cols="12" sm="6" md="6">
                <v-card-text class="pa-0">
                  <apexchart
                    type="radialBar"
                    :options="welcomeProgressChart.chartOptions"
                    :series="welcomeProgressChart.series"
                    height="250"
                  />
                </v-card-text>
              </v-col>
            </v-row>
          </base-card>
        </v-col>
        <v-col cols="12" md="9">
          <base-card>
            <v-card-title class="justify-space-between">
              <div class="card-title ma-0">Mis Proyectos</div>
              <v-btn text small color="primary"> Ver todos </v-btn>
            </v-card-title>
          </base-card>
        </v-col>
        <v-col cols="12" md="3">
          <DashboardNewProjectCard
            card-class="primary darken-1"
            text="Nuevo Proyecto"
            btn-icon="mdi-plus"
            btn-color="primary darken-1"
          />
        </v-col>
        <v-col cols="12">
          <base-card>
            <v-simple-table>
              <template v-slot:default>
                <thead>
                  <tr style="line-height: 1.5">
                    <th class="text-left">Código</th>
                    <th class="text-left">Nombre</th>
                    <th class="text-left">Cliente</th>
                    <th class="text-left">Etapa</th>
                    <th class="text-left">Action</th>
                  </tr>
                </thead>
                <tbody>
                  <tr
                    v-for="item in ListProyecto"
                    :key="item.codigo"
                    style="line-height: 4"
                  >
                    <td>
                      {{ item.codigo }}
                    </td>
                    <td class="text-no-wrap">
                      {{ item.nombre }}
                    </td>
                    <td class="text-no-wrap">
                      {{ item.nombreCliente }}
                    </td>
                    <td class="font-weight-medium text--disabled text-no-wrap">
                      {{ item.etapa }}
                    </td>
                    <td>
                      <v-btn
                        class="mx-2 shadow-none orange darken-1"
                        fab
                        dark
                        x-small
                        @click="setGlobProject(item.id)"
                      >
                        <v-icon>mdi-play</v-icon>
                      </v-btn>
                    </td>
                  </tr>
                </tbody>
              </template>
            </v-simple-table>
          </base-card>
        </v-col>
        <v-col cols="12" md="6">
          <base-card>
            <v-card-title class="justify-space-between">
              <div class="card-title ma-0">Últimas Actividades</div>
              <v-btn text small color="primary"> Ver todos </v-btn>
            </v-card-title>
            <v-card-text>
              <div class="d-flex justify-space-between align-baseline">
                <div class="mr-2">
                  <v-icon class="caption orange--text text--darken-1"
                    >mdi-checkbox-blank-circle</v-icon
                  >
                </div>
                <div class="lm-title flex-grow-1">
                  <p class="font-weight-medium mb-0">React</p>
                  <p class="caption">20 March</p>
                </div>

                <div class="flex-grow-1">
                  <p class="caption font-weight-medium ma-0 text-right">40%</p>
                  <v-progress-linear
                    v-model="valueDeterminate"
                    rounded
                    color="orange darken-1"
                  />
                </div>
              </div>
              <div class="d-flex justify-space-between align-baseline">
                <div class="mr-2">
                  <v-icon class="caption blue--text text--darken-1"
                    >mdi-checkbox-blank-circle</v-icon
                  >
                </div>
                <div class="lm-title flex-grow-1">
                  <p class="font-weight-medium mb-0">Angular</p>
                  <p class="caption">10 March</p>
                </div>

                <div class="flex-grow-1">
                  <p class="caption font-weight-medium ma-0 text-right">80%</p>
                  <v-progress-linear
                    v-model="valueDeterminate2"
                    rounded
                    color="blue darken-1"
                  />
                </div>
              </div>
              <div class="d-flex justify-space-between align-baseline">
                <div class="mr-2">
                  <v-icon class="caption blue--text text--darken-1"
                    >mdi-checkbox-blank-circle</v-icon
                  >
                </div>
                <div class="lm-title flex-grow-1">
                  <p class="font-weight-medium mb-0">React</p>
                  <p class="caption">20 March</p>
                </div>

                <div class="flex-grow-1">
                  <p class="caption font-weight-medium ma-0 text-right">40%</p>
                  <v-progress-linear
                    v-model="valueDeterminate"
                    rounded
                    color="blue darken-1"
                  />
                </div>
              </div>
              <div class="d-flex justify-space-between align-baseline">
                <div class="mr-2">
                  <v-icon class="caption orange--text text--darken-1"
                    >mdi-checkbox-blank-circle</v-icon
                  >
                </div>
                <div class="lm-title flex-grow-1">
                  <p class="font-weight-medium mb-0">Vue</p>
                  <p class="caption">10 March</p>
                </div>

                <div class="flex-grow-1">
                  <p class="caption font-weight-medium ma-0 text-right">80%</p>
                  <v-progress-linear
                    v-model="valueDeterminate2"
                    rounded
                    color="purple accent-4"
                  />
                </div>
              </div>
              <div class="d-flex justify-space-between align-baseline">
                <div class="mr-2">
                  <v-icon class="caption red--text"
                    >mdi-checkbox-blank-circle</v-icon
                  >
                </div>

                <div class="lm-title flex-grow-1">
                  <p class="font-weight-medium mb-0">HTML</p>
                  <p class="caption">06 March</p>
                </div>

                <div class="flex-grow-1">
                  <p class="caption font-weight-medium ma-0 text-right">80%</p>
                  <v-progress-linear
                    v-model="valueDeterminate2"
                    rounded
                    color="red accent-4"
                  />
                </div>
              </div>
              <div class="d-flex justify-space-between align-baseline">
                <div class="mr-2">
                  <v-icon class="caption blue--text text--darken-1"
                    >mdi-checkbox-blank-circle</v-icon
                  >
                </div>
                <div class="lm-title flex-grow-1">
                  <p class="font-weight-medium mb-0">CSS</p>
                  <p class="caption">20 March</p>
                </div>

                <div class="flex-grow-1">
                  <p class="caption font-weight-medium ma-0 text-right">40%</p>
                  <v-progress-linear
                    v-model="valueDeterminate"
                    rounded
                    color="blue darken-1"
                  />
                </div>
              </div>
            </v-card-text>
          </base-card>
        </v-col>
        <v-col cols="12" md="6">
          <base-card>
            <v-card-title>Proyectos vs tareas</v-card-title>
            <v-card-text>
              <apexchart
                type="bar"
                height="340"
                :options="this.datachart.chartOptions"
                :series="this.datachart.series"
              />
            </v-card-text>
          </base-card>
        </v-col>
      </v-row>
    </v-col>

    <v-col cols="12" md="12" lg="4">
      <v-row>
        <!--
          <v-col cols="12" md="12">
            <base-card>
              <v-card-text class>
                <v-sheet
                  color="grey lighten-5"
                  class="text-center pa-4 rounded-lg"
                >
                  <v-img
                    class="mx-auto"
                    max-width="50"
                    min-width="50"
                    src="@/assets/images/illustrations/upgrade.svg"
                  />
                  <p class="ma-0 pt-4 pb-4 px-10 p-phrase">
                    "La inteligencia consiste no sólo en el conocimiento, sino también en la destreza de aplicar los conocimientos en la práctica"
                    <br />- Aristóteles
                  </p>
                </v-sheet>
              </v-card-text>
            </base-card>
          </v-col>
        -->
        <v-col cols="12" md="12">
          <base-card>
            <v-card-text class>
              <div class="mb-5">
                <v-card-title class="justify-space-between px-0 pt-0 pb-3">
                  <div class="card-title ma-0">Próximos Hitos</div>
                  <v-btn text small color="primary"> Ver todos </v-btn>
                </v-card-title>
                
                <v-list-item
                  class="pa-0"
                  v-for="(item,index) in listHitos"
                  :key="item.proyecto"
                >
                  <v-list-item-avatar>
                        <v-img :src="iconHito"></v-img>
                  </v-list-item-avatar>
                 
                  <v-list-item-content>
                     <v-row>
                      <v-col>
                      <v-list-item-title
                        class="body-2 font-weight-medium"
                        v-text="index + '-' + item.proyecto "
                      />
                        <v-list-item-subtitle v-text="fechaSetHito" />
                       </v-col>
                       <v-col>
                      <v-list-item-title
                        class="body-2 font-weight-medium"
                        v-text="item.cliente"
                      />
                    
                    </v-col>
                    </v-row>
                  </v-list-item-content>

                  <v-list-item-action>
                    <v-btn icon>
                      <v-icon
                        color="text-gray-700 blue-grey--text text--darken-1"
                        >mdi-dots-horizontal</v-icon
                      >
                    </v-btn>
                  </v-list-item-action>
                </v-list-item>
              </div>
            </v-card-text>
          </base-card>
        </v-col>
        <v-col cols="12" md="12">
          <base-card>
            <v-card-text class>
              <div class="mb-10">
                <v-card-title class="justify-space-between px-0 pt-0 pb-3">
                  <div class="card-title ma-0">Otros</div>
                </v-card-title>

                <v-list-item
                  class="pa-0"
                  v-for="item in itemsTwo"
                  :key="item.title"
                >
                  <v-list-item-avatar>
                    <v-icon :class="[item.iconClass]" v-text="item.icon" />
                  </v-list-item-avatar>

                  <v-list-item-content>
                    <v-list-item-title
                      class="body-2 font-weight-medium"
                      v-text="item.title"
                    />
                    <v-list-item-subtitle v-text="item.subtitle" />
                  </v-list-item-content>

                  <v-list-item-action>
                    <v-btn icon>
                      <v-icon color="text-gray-700">mdi-dots-horizontal</v-icon>
                    </v-btn>
                  </v-list-item-action>
                </v-list-item>
              </div>
            </v-card-text>
          </base-card>
        </v-col>
      </v-row>
    </v-col>
  </v-row>
</template>
<script>
import DashboardNewProjectCard from "@/components/Cards/DashboardNewProjectCard";
import {
  welcomeProgressChart,
  studyChart,
} from "@/data/DashboardManagement/WelcomeProgressChart";
import axios from "axios";
import { mapGetters, mapActions } from "vuex";
import { mounted } from "vue2-dropzone";
export default {
  name: "DashboardManagement",
  metaInfo: {
    // title will be injected into parent titleTemplate
    title: "Dashboard",
  },
  components: {
    DashboardNewProjectCard,
  },
  data() {
    return {
      iconClass:"dark--text text--lighten-4 info lighten-5",
      iconHito:"https://e7.pngegg.com/pngimages/556/638/png-clipart-project-management-computer-icons-the-noun-project-agile-process-icon-blue-text.png",
      fechaSetHito:"20-05-2021",
      listHitos:[],
      userId: "",
      welcomeProgressChart,
      studyChart,
      datachart:{},
      valueDeterminate: 50,
      valueDeterminate2: 80,
      items: [
        {
          icon: "mdi-flag",
          iconClass: "dark--text text--lighten-4 info lighten-5",
          title: "Entregable 1 - PROY-001",
          subtitle: "15 de mayo del 2022",
        },
        {
          icon: "mdi-flag",
          iconClass: "dark--text text--lighten-4 info lighten-5",
          title: "Entregable 2 | PROY-002",
          subtitle: "16 de mayo del 2022",
        },
        {
          icon: "mdi-flag",
          iconClass: "dark--text text--lighten-4 info lighten-5",
          title: "Entregable 3 | PROY-003",
          subtitle: "24 de mayo del 2022",
        },
      ],
      itemsTwo: [
        {
          icon: "mdi-book-alert",
          iconClass: "dark--text text--lighten-4 grey lighten-5",
          title: "Reuniones pendientes",
          subtitle: "23 Dec 2020",
        },
        {
          icon: "mdi-chart-bar",
          iconClass: "dark--text text--lighten-4 grey lighten-5",
          title: "Rendimiento mensual",
          subtitle: "23 Dec 2020",
        },
        {
          icon: "mdi-email-alert",
          iconClass: "dark--text text--lighten-4 grey lighten-5",
          title: "Correos sin leer",
          subtitle: "23 Dec 2020",
        },
        {
          icon: "mdi-order-bool-ascending-variant",
          iconClass: "dark--text text--lighten-4 grey lighten-5",
          title: "Tareas asignadas",
          subtitle: "23 Dec 2020",
        },
      ],
    };
  },
  async created() {
    //await this.fetchUser();
    await this.obtenerProyectos();
    await this.obtenerProyectosVSTareas();
    await this.ObtenerHitos();
  },
  methods: {
    ...mapActions("Authentication", ["fetchUser"]),
    ...mapActions("Global", ["setGlobIdProject"]),
    ...mapActions("Proyecto", ["setListaProyectos"]),
    ...mapActions("Proyecto", ["setListaProyectos_vs_Tareas"]),

    async obtenerProyectos() {
      await axios
        .get("/Proyecto/ListaProyectos_Analista")
        .then((res) => {
          const listProyectos = res.data;
          console.log(listProyectos);
          this.setListaProyectos(listProyectos);
        })
        .catch((err) => {
          console.error(err);
        })
        .finally(() => {
          this.isLoadingTable = false;
        });
    },
    async obtenerProyectosVSTareas() {
      await axios
        .get("/Proyecto/ListaProyectosConTareasPorEstado")
        .then((res) => {
          this.setListaProyectos_vs_Tareas(res.data);
          let tasksChart = {
            series: [
              {
                name: "Tareas pendientes",
                data: res.data.map((x) => x.tareasPendientes),
              },
              {
                name: "Tareas en desarrollo",
                data: res.data.map((x) => x.tareasEnDesarrollo),
              },
              {
                name: "Tareas finalizadas",
                data: res.data.map((x) => x.tareasFinalizadas),
              },
              {
                name: "Tareas por corregir",
                data: res.data.map((x) => x.tareasCorregir),
              },
              {
                name: "Tareas por revisar",
                data: res.data.map((x) => x.tareasPorRevisar),
              },
            ],
            chartOptions: {
              chart: {
                type: "bar",
                stacked: true,
                toolbar: {
                  show: false,
                },
              },
              // tooltip: {
              //   theme: 'dark'
              // },
              legend: {
                position: "bottom",
                itemMargin: {
                  horizontal: 10,
                  vertical: 15,
                },
              },
              plotOptions: {
                bar: {
                  horizontal: false,
                  columnWidth: "20px",
                },
              },
              dataLabels: {
                enabled: false,
              },

              colors: ["#0081ff", "#e95455", "#e97d23"],
              xaxis: {
                axisBorder: {
                  show: false,
                },

                categories: res.data.map((x) => x.nombre),
              },
              yaxis: {
                show: false,
              },
              grid: {
                show: false,
              },
            },
          };
          this.datachart=tasksChart;
        })
        .catch((err) => {
          console.error(err);
        })
        .finally(() => {
          this.isLoadingTable = false;
        });
    },
    async ObtenerHitos(){
       await axios
        .get("/Cronograma/Get_CronogramaxHitos?days=90")
        .then((res) => {
          this.listHitos = res.data;
       
        })
        .catch((err) => {
          console.log(err)
        })
    },
    setGlobProject(idProyecto) {
      this.setGlobIdProject(idProyecto);
    },
  },
  computed: {
    ...mapGetters("Proyecto", ["ListProyecto"]),
    ...mapGetters("Proyecto", ["ListProyecto_vs_Tarea"]),
    ...mapGetters("Global", ["GlobIdProject"]),
    ...mapGetters("Authentication", ["user"]),
  },
};
</script>
<style lang="scss" scoped>
.p-phrase {
  font-family: "Segoe UI" !important;
  font-size: 1rem;
  line-height: 25px;
  font-style: italic;
}
</style>