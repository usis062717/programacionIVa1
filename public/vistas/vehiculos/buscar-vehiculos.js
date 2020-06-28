var appBuscarVehiculos = new Vue({
    el:'#frm-buscar-vehiculos',
    data:{
        misvehiculos:[],
        valor:''
    },
    //Metodo para buscar el contenido de la base de datos 
    methods:{
        buscarVehiculo:function(){
            fetch(`private/Modulos/vehiculos/procesos.php?proceso=buscarVehiculo&vehiculo=${this.valor}`).then(resp=>resp.json()).then(resp=>{
                this.misvehiculos = resp;
             });
            },
            //metodo para modificar los datos de la base de datos
            modificarVehiculo:function(vehiculo){
                apptvehiculos.vehiculo = vehiculo;
                apptvehiculos.vehiculo.accion = 'modificar';
            },
            //metodo para para eliminar datos de la base de datos
            eliminarVehiculo:function(idVehiculo){
                alertify.confirm("EDITAR VEHICULOS","Esta seguro de eliminar",
                ()=>{
                    fetch(`private/Modulos/vehiculos/procesos.php?proceso=eliminarVehiculo&vehiculo=${idVehiculo}`).then( resp=>resp.json() ).then(resp=>{
                        this.buscarVehiculos();
                    });
                    alertify.success('Registro Eliminado correctamente.');//mensaje que se mostrara si la conexion fue con exito 
                },
                ()=>{
                    alertify.error('Eliminacion cancelada por el usuario.');//
                });
            }
        },
        //funcion de buscar vehiculos
        created:function(){
            this.buscarVehiculo();
        }
    });
    