import axios from "axios";
const URL_API = 'http://localhost:8081/api/matricula/v1/estudiantes';

//guardar API
//public void guardar(@RequestBody EstudianteTo estudianteTo)

const guardar = async (body)=> {
    let token = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJpc3MiOiJodHRwOi8vdWNlLmVkdS5lYyIsInVwbiI6Im1pY29ycmVvQHVjZS5lZHUuZWMiLCJncm91cHMiOlsiYWRtaW4iXSwiaWF0IjoxNzUyODg0MzIyLCJleHAiOjE3NTI4ODQzNTIsImp0aSI6IjIzZmZjZGFmLWI3ZWQtNDQ2ZC1hNTRmLTk3ZGU0Yzc0NWE3YiJ9.YRKNJq6NxzjfHftIxO-lYquZrHCL3Tt6eDpL3EnOsRklQLb7XYywuKi1sIHCVxMkFMOfb2hAu89D_bF_vF2WhO3O1bng4uZSQGNRkr8KZikQJy-iB4GF6jUuEwAgGsQNg3EySm-eHolsrMINF8X7AXf-jJgE33Os4kT5Dz5WYx-gZA4tjW_JbpSmlEDmKdm1-wPGFUH2Bz5KnC6gacdPConZDINPBcqj8a5YOsUyvHHc4_PbuSdlPd-hm4uUWOth6IWDXHY6-xqnsyDNao-iAAIfoYA1MNYke532c7NU9WGgivXyvftsL6GhcIkwkiVqwwJHaZuxJNG9axhXe__1tA'
   const data = axios.post(`${URL_API}`,body,
    {
        headers: {
            Authorization: `Bearer ${token}`
        }
    }
   ).then(r => r.data);
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