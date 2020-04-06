<?php
include('../../Config.php');
$materia =new materia($conexion);

$proceso= '';
if (isset($_GET['proceso']) && strlen($_GET['preoceso'])>0){
    $proceso='';

}
$materia->$proceso( $_GET['materia']);
print_r(json_encode($materia->respuesta));

class materia{
    private $datos =array(),$db;
    public $respuesta=['msg'=>'correcto'];

    public function_costruct($db){
        $this->db=$db;
        
    }
    public functiion recibirDatos($materia){
        $this->datos=json_decode($materia,true);
        $this->validar_datos();
    }
    private function validar_datos(){
        if(empty($this->datos['codigo']) ) {
            $this->respuesta['msg']= 'ingrese el codigo de la materia';

        }
        if (empty($this->datos['materia']) ){
            $this->respuesta['msg'] ='ingrese el nombre de la materia';

        }
        if (empty($this->datos['carrera'])) {
            $this->respuesta['msg']= 'ingreae nombre de la carrera';

        }
        $this->almacenar_materia();

    }

    private function almacenar_mateia(){
        if($this->respuesta['msg']==='correcto'){
            if ($this->datos['accion']==='nuevo'){
                $this->db->consultas('
                INSERT INTO materias (codigo,materia,facultad)VALUES(
                    "' $this->datos['codigo'] .'",
                    "'. $this->datos['materia'] .'",
                    "'. $this->datos['carrera'] .'",
                    "'. $this->datos['facultad'] .'"
                )

            ')
            $this->respuesta['msg'] ='Registro insertado correctamente';

            }else if ($this->datos['accion']==='modificar'){
                $this->db->consultas('
                UPDATE materias SET
                codigo     = "'. $this->datos['codigo'] .'",
                materia     = "'. $this->datos['materia'] .'",
                carrera  = "'. $this->datos['carrera'] .'",
                facultad   = "'. $this->datos['facultad'] .'"
                WHERE idMateria = "'. $this->datos['idMateria'] .'"

                ');
                $this->respuesta['msg']= 'Registro actualizado correctamente';
            }
        }

    }
    public function buscarMAteria($valor=''){
        $this->db->consultas('
        select materias.idMateria, materias.codigo, materias.materia, materias.carrera, materias.facultad
        from materias
        where materias.codigo like "%'.$valor.'%" or materias.materia like "%'.$valor.'%" or materias.carrera like "%'.$valor.'%"

        ');
        return $this->respuesta=$this->db->obtener_datos();
    }
    public function eliminarMateria($idMateria=''){
        $this->db->consultas('
           delete materias
           from materias
           where materias.idMateria = "'.$idMateria.'"
        ');
        $this->respuesta['msg'] = 'Registro eliminado correctamente';
    }

}
?>