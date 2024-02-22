const pantalla = document.querySelector(".pantalla");
const botones = document.querySelectorAll(".btn");

botones.forEach(boton =>{
    boton.addEventListener("click", () =>{
        console.log(boton.textContent);

        //c BORRAR

        if(boton.id === "c"){
            pantalla.textContent = "0";
            return;
        }

        // flecha borrar
        if (boton.id === "delete"){
            if(pantalla.textContent.length === 1 || pantalla.textContent === "Error!"){
                pantalla.textContent = "0";
            }else{
                pantalla.textContent = pantalla.textContent.slice(0, -1);
            }
            return;
        }

        //boton igual
        if(boton.id === "igual"){
            try{
                pantalla.textContent = eval(pantalla.textContent);
            }catch{
                pantalla.textContent = "Error!";
            }

            return;
        }

        //mostrar en pantalla
        const botonApretado = boton.textContent;

        if(pantalla.textContent === "0" || pantalla.textContent === "Error!"){
            pantalla.textContent = botonApretado;
        }else{
            pantalla.textContent += botonApretado
        }
    })
})