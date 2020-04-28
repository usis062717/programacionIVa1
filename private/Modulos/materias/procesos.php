<?php
include('../../Config/Config.php');
$materia =new materia($conexion);

$proceso = '';
if(isset($_GET['proceso']) && strlen($_GET['proceso'])>0){
 $proceso = $GET['proceso'] ;   
}
$materia->$proceso( $_GET['materia']);
print_r(json_encode($materia->respuesta));

class materia{
    private $datos =array(), $db;
    public $respuesta =['msg' =>'corecto'];

    public function__construct($db){
        $this->db=$db;
    }
    public function recibirDatos($materia){
        $this->datos = json_decode($materia,true);
        $this->validar_datos();
    }
    private function validarDatos(){
        if( empty($this->datos['codigo']) ){
            $this->respuesta['msg'] = 'ingrese codigo de materia';   
        }
        if(empty($this->datos['nombre']) ){
            $this->respuesta['msg'] = 'ingrese nombre de materia';
        }
        $this->almacenar_materia();
    }
    private function almacenar_materia(){
        if($this->respuesta['msg']==='correcto' ){
            if( $this->datos['accion']==='nuevo'){
                $this->db->consultas('
                INSERT INTO materias (codigo,nombre) VALUES(
                    "'$this->datos['codigo'].'",
                    "'$this->datos['nombre'].'"
                )
            ');
            $this->respuesta['msg'] = 'registro ingresado correctamente';           
            } else if($this->datos['accion']==='modificar'){
                $this->db->consultas('
                   UPDATE materias SET
                        codigo            ="'.$this->datos['codigo'].'",
                        codigo            ="'.$this->datos['nombre'].'",
                    WHERE idMateria       ="'.$this->datos['idMAteria'].'"                
                ')
                $this->respuesta['msg'] = 'registro modificado correctamente';
            }
        }
    }
    public function buscarMateria($valor =''){
        $this->db->consultas('
            select materias.idMateria, materias.codigo, materias.nombre
            from materias
            where materias.codigo like "%'. $valor .'%" or materias.nombre like "%'. $valor .'%"             
        ')
        return $this->redspuesta =$this->db->obtener_data();
    }
    public function eliminarMAteria($idMateria=0){
        $this->db->consultas('
           delete materias
           from materias
           where materias.idMateria="'.$idMAteria.'"
        ');
        return $this->respuesta['msg'] = 'registro eliminado';;
    }
}
?>
