export function obtenerPaginasPermitidas(usuario){
    let arreglo;
    if(usuario === 'admin'){
        //Paginas del admin
        arreglo = ['/about','/estudiante','/notas','/403','/home'];
    }
    if(usuario === 'estudiante'){
        //paginas de estudiante
         arreglo = ['/about','/estudiante','/403','/home'];
    }
    return arreglo;
}