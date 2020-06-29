var apptvehiculos = new Vue({
    el:'#frm-vehiculos',
    data:{
        vehiculo:{
            idVehiculo : 0,
            accion    : 'nuevo',
            marca   : '',
            modelo : '',
            year  : '',
            msg       : ''
        }
    },
    //este el metodo que se usa para guardar los datos a la base de datos
    methods:{ 

        guardarVehiculos(){
            fetch(`private/Modulos/vehiculos/procesos.php?proceso=recibirDatos&vehiculo=${JSON.stringify(this.vehiculo)}`).then( resp=>resp.json() ).then(resp=>{         
               //con las siguientes condicionales
                if( resp.msg.indexOf("correctamente")>=0 ){//si la conexion se logro se mandara el mensaje de correcto
                    alertify.success(resp.msg);//mientras si la conexion falla se mostrara este mensaje de error
                } else if(resp.msg.indexOf("Error")>=0){
                    alertify.error(resp.msg);
                } else{
                    alertify.warning(resp.msg);// en forma de adventecia que se mostrara en pantalla
                }
            });
        },
        //aqui esta el metodo para limpiar el formalario de todos los datos que se allan 
        limpiarVehiculos(){
            this.vehiculo.idVehiculo=0;
            this.vehiculo.marca="nuevo";
            this.vehiculo.modelo="";
            this.vehiculo.year="";
            this.vehiculo.msg="";
        }
    }
});