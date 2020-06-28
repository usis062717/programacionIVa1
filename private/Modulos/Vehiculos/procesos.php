<?php 
include('../../Config/Config.php'); //llamado de configuarcion 
$vehiculo = new vehiculo($conexion);

$proceso = '';// proceso para obtener los datos de la tabla
if( isset($_GET['proceso']) && strlen($_GET['proceso'])>0 ){
	$proceso = $_GET['proceso'];
}
$vehiculo->$proceso( $_GET['vehiculo'] );
print_r(json_encode($vehiculo->respuesta));//imprime los datos en json

class vehiculo{
    private $datos = array(), $db;
    public $respuesta = ['msg'=>'correcto'];
    
    public function __construct($db){
        $this->db=$db;
    }
    public function recibirDatos($vehiculo){
        $this->datos = json_decode($vehiculo, true);
        $this->validar_datos();
    }
    private function validar_datos(){
        if( empty(trim($this->datos['marca'])) ){
            $this->respuesta['msg'] = 'por favor ingrese marca de vehiculo';
        }
        if( empty(trim($this->datos['modelo'])) ){
            $this->respuesta['msg'] = 'por favor ingrese modelo de vehiculo ';
        }
        if( empty(trim($this->datos['year'])) ){
            $this->respuesta['msg'] = 'por favor ingrese año de vehiculo';
        }
        $this->almacenar_Vehiculo();
    }
    private function almacenar_Vehiculo(){
        if( $this->respuesta['msg']==='correcto' ){
            if( $this->datos['accion']==='nuevo' ){
                $this->db->consultas('
                    INSERT INTO tbl_vehiculos (marca,modelo,year) VALUES(
                        "'. $this->datos['marca'] .'",
                        "'. $this->datos['modelo'] .'",
                        "'. $this->datos['year'] .'"
                    )
                ');
                $this->respuesta['msg'] = 'Registro insertado correctamente';
            } else if( $this->datos['accion']==='modificar' ){
                $this->db->consultas('
                    UPDATE tbl_vehiculos SET
                        marca     = "'. $this->datos['marca'] .'",
                        modelo  = "'. $this->datos['modelo'] .'",
                        year   = "'. $this->datos['year'] .'"                    
                    WHERE idVehiculo = "'.$this->datos['idVehiculo'] .'"
                ');
                $this->respuesta['msg'] = 'Registro actualizado correctamente';
            } else{
                $this->respuesta['msg'] = 'Registro no se actualizado correctamente';
            }
        }
    }
    public function buscarVehiculo($valor = ''){
        $this->db->consultas('
            select tbl_vehiculos.idVehiculo, tbl_vehiculos.marca, tbl_vehiculos.modelo, tbl_vehiculos.year
            from tbl_vehiculos
            where tbl_vehiculos.marca like "%'. $valor .'%" or tbl_vehiculos.modelo like "%'. $valor .'%"
        ');
        return $this->respuesta = $this->db->obtener_data();
    }
    public function eliminarVehiculo($idVehiculo = 0){
        $this->db->consultas('
            DELETE tbl_vehiculos
            FROM tbl_vehiculos
            WHERE tbl_vehiculos.idVehiculo="'.$idVehiculo.'"
        ');
        return $this->respuesta['msg'] = 'Registro eliminado correctamente';;
    }
}
?>