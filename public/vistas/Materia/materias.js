var appmateria = new Vue({
    el:'#frm-materias',
    data:{
        materia:{
            idAlumno  : 0,
            accion    : 'nuevo',
            materia    : '',
            facultad    : '',
            msg       : ''
        }
    },
    methods:{
        guardarAlumno:function(){
            fetch(`private/Modulos/alumnos/procesos.php?proceso=recibirDatos&alumno=${JSON.stringify(this.alumno)}`).then( resp=>resp.json() ).then(resp=>{
                this.materia.msg = resp.msg;
                this.materia.idAlumno = 0;
                this.materia.materia = '';
                this.materia.facultad = '';
                this.materia.accion = 'nuevo';
                appBuscarAlumnos.buscarAlumno();
            });
        }
    }
});