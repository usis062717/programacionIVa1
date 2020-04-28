var appinscripciones =new VUE({
     el:'#frm-inscripciones',
     data:{
         Inscripciones:{
             idInscripcion :0,
             accion   :nuevo,
             codigo   :'',
             nombre   :'',
             msg      :''
         }
     },
     methods:{
         guardarInscripciones(){
             fetch(`private/Modulos/inscripciones/procesos.php?proceso=recibirDatos&inscripciones=${JSON.stringify(this.inscripcion)}`).then( resp=>resp.json() ).then(resp=>{
                 this.inscripciones.msg=resp.msg;
                 this.limpiarInscripciones();

            });
        },
        limpiarInscripciones(){
            this.inscripcion.idInscripcion=0;
            this.inscripcion.accion="nuevo";
            this.inscripcion.codigo="";
            this.inscripcion.nombre="";
            this.inscripcion.direccion="";
            this.inscripcion.responsable="";
            this.inscripcion.telefono="";
            this.inscripcion.msg="";
        } 
    }

});