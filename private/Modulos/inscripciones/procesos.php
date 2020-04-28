<?php
include('../../Config/Config,php');
$inscripcion = new inscripcion($conexion);

$proceso ='';
if(isset($_GET['proceso']) && strlen($_GET['proceso'])>0 ){
    $proceso =$_GET['proceso'];
}
$inscripcion->$proceso( $_GET['inscripcion'] );
print_r(json_encode(inscripcion->respuesta));

class inscripcion{
    private $datos = array(),$db;
    public $respuesta =['msg' =>'correcto'];

    public function __construct($db){
        $this->db=$db;
    }
    public function recibirDatos($inscripcion){
        $this->datos =json_decode($inscripcion,true);
        $this->validar_datos();

    }
    private function validarDatos(){
        if( empty($this->datos['codigo']) ){
            $this->respuesta['msg'] = 'ingrese codigo de inscripcion';

        }
        if( empty($this->datos['nombre']) ){
            $this->respuesta['msg'] = 'ingrese nombre';           
        }
        if( empty($this->datos['direccion']) ){
            $this->respuesta['msg'] = 'ingrese direccion';       
        }
        $this->almacenar_inscripcion();
        
    }
    private function almacenarInscripcion(){
        if($this->respuesta['msg']==='correcto'){
            if($this->datos['accion']==='nuevo'){
                $this->db->consultas('
                   INSERT INTO Inscripciones (codigo,nombre,direccion.telefono,dui,nit) VALUES(
                       "'.$this->datos['codigo'].'",
                       "'.$this->datos['nombre'].'",
                       "'.$this->datos['direccion'].'",
                       "'.$this->datos['telefono'].'",
                    )
                ');
                $this-respuesta['msg']='registro ingresado correctamente';
            } elseif( $this->datos['accion']==='modificar' ){
                $this->db->consultas('
                UPDATE inscripciones SET
                    codigo               ="'.$this->datos['codigo'].'",
                    nombre               ="'.$this->datos['nombre'].'",
                    direccion            ="'.$this->datos['direccion'].'",
                    telefono             ="'.$this->datos['telefono'].'",
                    where idInscripcion  ="'.$this->datos['idInscripcion'].'"
                ');
                $this->respuesta['msg']='registro actualizado correctamente';               
            }
        }
    }
    public function buscarInscripciones($valor =''){
        $this->db->consultas('
        select inscripciones.idInscripcion, iscripciones.codigo, inscripciones.nombre, incripciones.direccion, inscripciones.telefono
        from Inscripciones
        where inscripcioes.codigo like "%'. $valor.'%" or inscripciones.nombre like "%'. $valor .'%" or inscripciones.telefono like "%'. $valor .'%"
        ')
        return $this->respuesta =$this->db->obtener_data();
    }
    public function eliminarInscripcion(idInscripcion =0) {
        $this-db->consultas('
        delete inscripciones
        from inscripciones
        where isncripciones.idInscripcion="'.$idInscripcion.'"
    ');
     return $this->respuesta['msg']= 'registro eliminado';;  
    
    }
}
?>
