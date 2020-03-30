
    function init(){
        var $ = el => {
            return el.match(/^#/) ? document.querySelector(el) : document.querySelectorAll(el);
        }
    let mostrarVista = $("[class*='mostrar-alumno']");
    mostrardocente= $("[class*='mostrar-docente']");
    mostrarVista.addEventListener('click',e=>{
        console.log(mostrarVista);
        e.stopPropagation();

        let modulo = e.toElement.dataset.modulo;
        fetch('public/vistas/alumnos/alumnos.html').then( resp=>resp.text() ).then(resp=>{
            $(`#vista-${modulo}`).innerHTML = resp;

            let btnCerrar = $(".close");
            btnCerrar.addEventListener("click",event=>{
                $(`#vista-${modulo}`).innerHTML = "";
            });

            let cuerpo = $("body"),
                script = document.createElement("script");
            script.src = `public/vistas/${modulo}/${modulo}.js`;
            cuerpo.appendChild(script);
        });
    });

    mostrardocente.addEventListener('click',e=>{
         e.stopPropagation();

        let modulo = e.srcElement.dataset.modulo;
        fetch('public/vistas/Docentes/docentes.html').then( resp=>resp.text() ).then(resp=>{
            $(`#vista-${modulo}`).innerHTML = resp;
            
            let btnCerrar = $(".close");
            btnCerrar.addEventListener("click",event=>{
                $(`#vista-${modulo}`).innerHTML = "";
            });

            let cuerpo = $("body"),
                script = document.createElement("script");
            script.src = `public/vistas/${modulo}/${modulo}.js`;
          cuerpo.appendChild(script);
        }); 
    });
};
