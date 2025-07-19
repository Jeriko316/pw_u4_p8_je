
<template>
  <div>
    <h2>Gestión de Estudiantes</h2>
    <div>
      <input v-model="estudiante.id" type="number" placeholder="ID (para actualizar/borrar)" />
      <input v-model="estudiante.nombre" type="text" placeholder="Nombre" />
      <input v-model="estudiante.apellido" type="text" placeholder="Apellido" />
      <input v-model="estudiante.fechaNacimiento" type="date" placeholder="Fecha Nacimiento" />
      <select v-model="estudiante.genero">
        <option value="M">Masculino</option>
        <option value="F">Femenino</option>
      </select>
    </div>
    <button @click="guardar">Guardar</button>
    <button @click="actualizar">Actualizar</button>
    <button @click="borrar">Borrar</button>
    <div v-if="mensaje" :style="{color: mensajeColor, marginTop: '10px'}">{{ mensaje }}</div>
  </div>
</template>


<script>
import {
  guardarFachada,
  actualizarFachada,
  borrarPorIdFachada,
} from "../clients/EstudianteClient";

export default {
  data() {
    return {
      estudiante: {
        id: '',
        nombre: '',
        apellido: '',
        fechaNacimiento: '',
        genero: 'M',
      },
      mensaje: '',
      mensajeColor: 'green',
    };
  },
  methods: {
    async guardar() {
      try {
        if (!this.estudiante.nombre || !this.estudiante.apellido || !this.estudiante.fechaNacimiento) {
          this.mensaje = 'Completa todos los campos para guardar.';
          this.mensajeColor = 'red';
          return;
        }
        const estudianteToBody = {
          nombre: this.estudiante.nombre,
          apellido: this.estudiante.apellido,
          fechaNacimiento: this.estudiante.fechaNacimiento + 'T00:00:00',
          genero: this.estudiante.genero,
        };
        await guardarFachada(estudianteToBody);
        this.mensaje = 'Estudiante guardado correctamente.';
        this.mensajeColor = 'green';
      } catch (e) {
        this.mensaje = 'Error al guardar.';
        this.mensajeColor = 'red';
      }
    },
    async actualizar() {
      try {
        if (!this.estudiante.id) {
          this.mensaje = 'Ingresa el ID para actualizar.';
          this.mensajeColor = 'red';
          return;
        }
        const estudianteToBody = {
          nombre: this.estudiante.nombre,
          apellido: this.estudiante.apellido,
          fechaNacimiento: this.estudiante.fechaNacimiento + 'T00:00:00',
          genero: this.estudiante.genero,
        };
        await actualizarFachada(Number(this.estudiante.id), estudianteToBody);
        this.mensaje = 'Estudiante actualizado correctamente.';
        this.mensajeColor = 'green';
      } catch (e) {
        this.mensaje = 'Error al actualizar.';
        this.mensajeColor = 'red';
      }
    },
    async borrar() {
      try {
        if (!this.estudiante.id) {
          this.mensaje = 'Ingresa el ID para borrar.';
          this.mensajeColor = 'red';
          return;
        }
        await borrarPorIdFachada(Number(this.estudiante.id));
        this.mensaje = 'Estudiante borrado correctamente.';
        this.mensajeColor = 'green';
      } catch (e) {
        this.mensaje = 'Error al borrar.';
        this.mensajeColor = 'red';
      }
    },
  },
};
</script>

<style>
</style>