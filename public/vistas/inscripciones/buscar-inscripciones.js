var appBuscarInscripciones = new VTTCue({
    el:'#frm-buscar-inscripciones',
    data:{
        datos:[],
        valor:''
    },
    methods:{
        busacarInscripciones(){
            fetch(`private/Modulos//inscripciones/procesos.php?proceso=buscarInscripcion&inscripcion=${this.valor}`).then(resp=>resp.json()).then(resp=>{
                this.datos =resp;
            
        });
        },
        modificarInscripcion:function(inscripcion){
            appinscripcion.inscripcion = inscripcion;
                appinscripcion.inscripcion.accion = 'modificar';
        },
        eliminarInscripcion:function(idInscripcion){
            fetch(`private/Modulos/inscripciones/procesos.php?proceso=eliminarInscripcion&inscripcion=${idInscripcion}`).then(resp=>resp.json()).then(resp=>{
                this.buscarInscripciones();
            });
        }
    },
    created:function(){
        this.buscarInscripciones();
    }
});