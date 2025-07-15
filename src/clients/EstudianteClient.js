import axios from "axios";
const URL_API = 'http://localhost:8081/api/matricula/v1/estudiantes';

//guardar API
//public void guardar(@RequestBody EstudianteTo estudianteTo)

const guardar = async (body)=> {
   const data = axios.post(`${URL_API}`,body).then(r => r.data);
    console.log(data);
}

//Actualizar
// public void actualizarPorId(@PathParam("id") Integer id, @RequestBody EstudianteTo estudianteTo)
const actualizar = async (body, id) => {
    axios.put(`${URL_API}/${id}`, body).then(r => r.data);

}

//ActualizarParcial
//public void actualizarParcialPorId(@PathParam("id") Integer id, @RequestBody EstudianteTo estudianteTo) {
const actualizarParcial = async (body , id) => {
    axios.patch(`${URL_API}/${id}`, body).then(r => r.data);

}

//Borrar
// public void borrarPorId(@PathParam("id") Integer id) {
const borrarPorId = async (id) => {
    axios.delete(`${URL_API}/${id}`).then(r => r.data);
}

//fachadas
export const guardarFachada = async (body)=> {
   await guardar(body);
}

export const actualizarFachada =async (id , body) => {
     await actualizar(body, id);

}

export const actualizarParcialFachada=async (id , body) => {
     await actualizarParcial(body, id);
}

export const borrarPorIdFachada=async (id) => {
     await borrarPorId(id);
}