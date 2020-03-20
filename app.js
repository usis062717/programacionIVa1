document.addEventListener("DOMContentLoaded",(even)=>{
    const formAlumnos= document.querySelector("#frmAlumno");
    formAlumnos.addEventListener("submit", (e)=>{
        e.preventDefault();
        let codigo= document.querySelector("#txtCodigoAlumno").value,
        nombre=document.querySelector("#txtNombreAlumno").value,
        direccion= document.querySelector("#txtDireccionAlumno").value,
        telefono= document.querySelector("#txtTelefonoAlumno").value;
    if ('localStorage' in window){
        window.localStorage.setItem("codigo",codigo);
        window.localStorage.setItem("nombre",nombre);
        window.localStorage.setItem("direccion",direccion);
        window.localStorage.setItem("telefono",telefono);
    
    } else { 
        alert("alamcenamineto en local no soportado !!! Actualizate!");

    } 
})
document.querySelector("#btnRecuperarAlumnos").addEventListener("click",(e)=>
{
    if ('localStorage' in window){
        document.querySelector("#txtCodigoAlumno").value=window.localStorage.getItem("codigo");
        document.querySelector("#txtNombreAlumno").value=window.localStorage.getItem("nombre");
        document.querySelector("#txtDireccionAlumno").value=window.localStorage.getItem("direccion");
        document.querySelector("#txtTelefonoAlumno").value=window.localStorage.getItem("telefono");

    } else {
        alert("almacenamiento en local no soportado!! actualizate!");

    }
   });

});
/*document.addEventListener("DOMContentLoader",init);*/
/*document.addEventListener("DOMContentLoader",function(event){
    alert(pagina cargo forma 2");
})*/

/* function init(event){
    alert("hola la pagina a cargado");
}*/