<template>
  <div>
    <button v-on:click="guardar()">Guardar</button>
    <button v-on:click="actualizar()">Actualizar</button>
    <button v-on:click="actualizarParcial()">ActualizarParcial</button>
    <button v-on:click="borrar()">Borrar</button>
  </div>
</template>

<script>
import {
  guardarFachada,
  actualizarFachada,
  actualizarParcialFachada,
  borrarPorIdFachada,
} from "../clients/EstudianteClient";
export default {
  methods: {
    async guardar() {
      //EstudianteTo
      // private Integer id;
      //private String nombre;
      //private String apellido;
      //private LocalDateTime fechaNacimiento;
      //private String genero;
      let fecha = "2000-10-02";
      const estudianteToBody = {
        nombre: "Erick",
        apellido: "Enriquez",
        fechaNacimiento: fecha + "T00:00:00",
        genero: "M",
      };
      await guardarFachada(estudianteToBody);
    },
    async actualizar() {
      let fecha = "2012-10-02";
      const estudianteToBody = {
        nombre: "Pepita",
        apellido: "Morales",
        fechaNacimiento: fecha + "T00:00:00",
        genero: "F",
      };
      await actualizarFachada(1, estudianteToBody);
    },

    async actualizarParcial() {
      const estudianteToBody = {
        apellido: "Teran",
      };
      await actualizarParcialFachada(1, estudianteToBody);
    },

    async borrar() {
      await borrarPorIdFachada(1);
    },
  },
};
</script>

<style>
</style>