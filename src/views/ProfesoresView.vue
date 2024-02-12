<template>
    <div class="container-fluid">
        <div class="row mt-4">
            <div class="col-4  border-end border-primary border-4">
                <h1>Formulario de Profesores</h1>
                <hr class="m-2 border border-primary border-3 opacity-60">
                <FormularioPersonas add-persona="agregarPersona" />
                
            </div>
            <div class="col-8">
                <h1>Formulario de Profesores</h1>
                <hr class="m-2 border border-primary border-3 opacity-60">
                <TablaPersonas :personas="personas" @delete-persona="eliminarPersona" @actualizar-persona="actualizarPersona" />
            </div>
        </div>
    </div>
</template>
<script>
import TablaPersonas from '@/components/TablaPersonas.vue';
import FormularioPersonas from '@/components/FormularioPersonas.vue';

export default{
    components:{
    TablaPersonas,
    FormularioPersonas,
    },
    data() {
          return {
              personas: [
                  {
                      id: 1,
                      nombre: 'Josep',
                      apellido: 'Magraner i Ramon',
                      dni: '2020202020',
                      email: 'josep@email.com',
                      telefono: '2982728972',
                      horasMantenimiento: "5",
                      especialidad: "Front-End",
                      fechaIngreso: "24/02/2023",
                  },
                  {
                      id: 2,
                      nombre: 'Jose Fidel',
                      apellido: 'Oltra Landete',
                      dni: '1122121121',
                      email: 'fidel@email.com',
                      telefono: '2982728972',
                      horasMantenimiento: "6",
                      especialidad: "Back-End",
                      fechaIngreso: "24/02/2012",
                  },
                  {
                      id: 3,
                      nombre: 'Guillermo',
                      apellido: 'Vidal Frasquet',
                      dni: '65465465451',
                      email: 'guillermo@maquina.com',
                      telefono: '2982728972',
                      horasMantenimiento: "4",
                      especialidad: "Cybersecurity",
                      fechaIngreso: "24/02/2008",
                  },
              ],
          }
      },
      methods: {
          agregarPersona(persona) {
              let id= 0;
              
              if (this.personas.length > 0) {
                  id = this.personas[this.personas.length - 1].id + 1;
              }
              
              this.personas= [...this.personas, { ...persona, id}];
          },
          eliminarPersona(id) {
              this.personas = this.personas.filter(
                  persona => persona.id !== id
              );
          },
          actualizarPersona(id, personaActualizada) {
              this.personas = this.personas.map(persona =>
                  persona.id === id ? personaActualizada : persona
              )
          },
        }

}
</script>