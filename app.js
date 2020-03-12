document.addEventListener("DOMContentLoaded", e =>{
    const form = document.querySelector("#frmConversores");
    form.addEventListener("submit", event=>{
        event.preventDefault();

    let DE= document.querySelector("#cboDe").value,
        A = document.querySelector("#cboA").value,
        cantidad = document.querySelector("#txtCantidadConversion").value,
        opcion = document.getElementById('cboConvertir');

        console.log(de, a, cantidad);
        let monedas= {
            "dolar":1,
            "euro":0.93,
            "quetzal":7.63,
            "lempira":24.9,
            "cordoba":34.19

        },
        peso ={
            "gramo":1000,
            "onza":35.274,
            "libra":2.20462,
            "kilogramo":1
        },

        longitud={
            "milimetro":1000,
            "centimetro":100,
            "metro":1,
            "kilometro":0.001,
            "milla":0.000621371

        },
        almacenamiento={
            "byte":8,
            "kilobyte":1000,
            "megabyte":1000000,
            "gigabyte":1000000000

        };

        
        let $res = document.querySelector("#lblRespuesta");
        if(opcion.value =="moneda"){
             $res.innerHTML= `Respuesta: ${ (monedas[a]/monedas[de]*cantidad).toFixed(2) }`;
    } else if(opcion.value =="peso"){
        $res.innerHTML= `Respuesta: ${ (peso[a]/peso[de]*cantidad).toFixed(2)}`;
    } else if(opcion.value =="longitud"){
        $res.innerHTML= `Respuesta: ${(longitud[a]/longitud[de]*cantidad).toFixed(2)}`;
    }
    else if(opcion.value =="almacenamiento"){
        $res.innerHTML= `Respuesta: ${(almacenamiento[a]/almacenamiento[de]*cantidad).toFixed(2)}`;
    };
});


});

function elegir_opcion(){
    let opcion= document.getElementById('cboConvertir'),
    de1 = document.getElementById('cboDe'),
    a1 = document.getElementById('cboA');


    de1.value="";
    a1.value="";
    de1.innerHTML="";
    a1.innerHTML="";


    if(opcion.value =="moneda"){
        var array = ["dolar!Dolar","ero!Euro","quetzal!Quetzal","lempira!Lempira","cordoba!Cordoba"];

    }else if(opcion.value == "peso"){
        var array = ["gramo!Gramo","onza!Onza","libra!Libra","kilogramo!Kilogramo"];

    }else if(opcion.value == "longitud"){
        var array = ["milimetro!Milimetro","centimetro!Centimetro","metro!Metro","kilometro!Kilometro","milla!Millla"];

    } else if(opcion.value == "almacenamiento"){
        var array = ["byte!Byte","kilobyte!Kilobyte","megabyte!Megabyte","gigabyte!Gigabyte"];

    };
    for (var i=0;i<array.length;i++){
        var repair = array[i].split("!");
        var newop = document.createElement("option");
        newop.value = reair[0]
        newop.innerHTML= repair[1];
        de1.options.add(newop);
    };
    for (var i=0;i<array.length;i++){
        var repair =array[i].split("!");
        var newop = document.createElement("option");
        newop.value = reair[0]
        newop.innerHTML= repair[1];
        a1.options.add(newop);

    };
    }


