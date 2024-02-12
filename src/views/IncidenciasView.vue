<template>
    <div class="container-fluid">
        <div class="row mt-4">
            <div class="col border-end border-primary border-4">
                <h1 class="text-center">Formulario de Incidencias</h1>
                <hr class="m-2 border border-primary border-3 opacity-60">
                <FormularioIncidencias @add-incidencia="agregarIncidencia"/>
                
               
            </div>
            <div class="col">
                <h1 class="text-center">Tabla de Incidencias</h1>
                <hr class="m-2 border border-primary border-3 opacity-60">
                <TablaIncidencias :incidencias="incidencia" @delete-incidencia="eliminarIncidencia" @actualizar-incidencia="actualizarIncidencia"/>
            </div>
        </div>
    </div>
</template>

<script>
import FormularioIncidencias from '@/components/FormularioIncidencias.vue';
import TablaIncidencias from '@/components/TablaIncidencias.vue';
export default{
    components:{
        FormularioIncidencias,
        TablaIncidencias
    },
    data() {
          return {
              incidencia:[
                {
                    id: 1,
                    aula: 2,
                    descripcion: "monitor roto",
                    nivelUrgencia:"medio",
                    fechaRegistro:"02/20/22",
                    estado: "solucionado"
                },
                {
                    id: 2,
                    aula: 4,
                    descripcion: "proyector no va",
                    nivelUrgencia:"urgente",
                    fechaRegistro:"02/20/22",
                    estado: "no-solucionado"
                },
                {
                    id: 4,
                    aula: "3bb",
                    descripcion: "internet",
                    nivelUrgencia:"medio",
                    fechaRegistro:"02/20/22",
                    estado: "en proceso"
                },
                {
                    id: 4,
                    aula: "3bb",
                    descripcion: "mesas",
                    nivelUrgencia:"bajo",
                    fechaRegistro:"02/20/22",
                    estado: "en proceso"
                },
                {
                    id: 4,
                    aula: "3bb",
                    descripcion: "ventana rota",
                    nivelUrgencia:"bajo",
                    fechaRegistro:"02/20/22",
                    estado: "finalizado"
                },
                {
                    id: 4,
                    aula: "3bb",
                    descripcion: "pizzara",
                    nivelUrgencia:"medio",
                    fechaRegistro:"02/20/22",
                    estado: "en proceso"
                },
                {
                    id: 4,
                    aula: "3bb",
                    descripcion: "ventana rota",
                    nivelUrgencia:"bajo",
                    fechaRegistro:"02/20/22",
                    estado: "arreglado"
                },
              ]
          }
      },
      methods: {
          agregarIncidencia(incidencia) {
            let id = 0;
                if (this.incidencia.length > 0) { 
                    id = this.incidencia[this.incidencia.length - 1].id + 1;
                }
                this.incidencia = [...this.incidencia, { ...incidencia, id }]; 
            },
            eliminarIncidencia(id) {
                this.incidencia = this.incidencia.filter(
                    incidencia => incidencia.id !== id
                );
            },
            actualizarIncidencia(incidenciaActualizada, id) {
                this.incidencia = this.incidencia.map(incidencia =>
                    incidencia.id === id ? incidenciaActualizada : incidencia
                );
            }
      }
}
</script>