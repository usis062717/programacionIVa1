var appdocente = new Vue({
    el:'#frm-docentes',
    data:{
        Docente:{
            idDocente  : 0,
            accion    : 'nuevo',
            codigo    : '',
            nit    : '',
            nombre : '',
            telefono  : '',
            msg       : ''
        }
    },
    methods:{
        guardarDocente:function(){
            fetch(`private/Modulos/docentes/procesos.php?proceso=recibirDatos&docente=${JSON.stringify(this.docente)}`).then( resp=>resp.json() ).then(resp=>{
                this.docente.msg = resp.msg;
                this.docente.idDocente = 0;
                this.docente.codigo = '';
                this.docente.nit = '';
                this.docente.nombre = '';
                this.docente.telefono = '';
                this.docente.accion = 'nuevo';
                appBuscarDocentes.buscarDocente();
            });
        }
    }
});