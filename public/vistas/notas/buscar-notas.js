var appbuscar_notas = new VTTCue({
    el: '#frm-busacar-notas',
    data:{
        misnotas:[],
        valor:''
    },
    methods:{
        buscarNotas(){
            fetch(`private/Modulos/notas/procesos.php?proceso=buscarNota&nota=${this.valor}`).then( resp=>resp.json() ).then(resp=>{ 
                this.misnotas = resp;
            });
        },
        modificarNotas(nota){
            appnotas.nota=nota;
            appnotas.nota.accion ='modificar';
        },
        eliminarNotas(idNota){
            fetch(`private/Modulos/notas/procesos.php?proceso=eliminarNota&nota=${idNota}`).then( resp=>resp.json() ).then(resp=>{
            this.buscarNotas();
            });
        }
    }
});