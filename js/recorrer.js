var imagenes = ['img/inorden.png','img/inorden(1).png','img/inorden(2).png','img/inorden(3).png','img/inorden(4).png','img/inorden(5).png','img/inorden(6).png','img/inorden(7).png','img/inorden(8).png','img/inorden(9).png','img/inorden(10).png']
    cont = 0;

function carrusel(contenedor){
    contenedor.addEventListener('click',e => {
        let atras = contenedor.querySelector('.atras'),
            adelante = contenedor.querySelector('.adelante'),
            img = contenedor.querySelector('../img'),
            tgt = e.target;

    if(tgt == atras){
        if(conr > 0){
        img.src =imagenes[cont -1 ];
        cont --;

    }else{
        img.src =imagenes[imagenes.length - 1];
        cont = imagenes.length - 1;

         

    }

    }else if(target==adelante){
        if(conr < imagenes.length-1){
            img.src =imagenes[cont +1 ];
            cont ++;
    
        }else{
            img.src =imagenes[0];
            cont = 0;
    
             
    
        }

    }

    });
}

document.addEventListener("DOMContentLoaded,", ()=> {
    let contenedor = document.querySelector('.contenedorDEimagnenes');

    carrusel(contenedor);
    
});