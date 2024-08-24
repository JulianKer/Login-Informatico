const form = document.getElementById("form");
const inputUsuario = document.querySelector("#usuario");
const inputContraseña = document.querySelector("#contraseña");
const labelUsuario = document.querySelector(".label-usuario");
const labelContraseña = document.querySelector(".label-contraseña");
const botonEnviar = document.querySelector(".boton");

const cuadricula = document.querySelector(".cuadricula");
let celda = `<div class="celda"></div>`;

document.addEventListener("DOMContentLoaded", ()=>{
    for (let i = 0; i < 136; i++) {
        cuadricula.innerHTML += celda;
    }
})

form.addEventListener("submit",(e)=>{
    e.preventDefault(); //preveo que NO se envie automaticamente y despues...

    //si los dos inputs NO estan vacios
    if (inputUsuario.value != "" && inputContraseña.value != "") {
        form.submit(); // envío el formulario
    }else{
        // si no, hago esto

        if (inputUsuario.value === "" && inputContraseña.value === "") {
            inputUsuario.style.borderBottom = "solid 3px red";
            inputContraseña.style.borderBottom = "solid 3px red";
        }else if (inputUsuario.value === "") {
            inputUsuario.style.borderBottom = "solid 3px red";
        }else{
            inputContraseña.style.borderBottom = "solid 3px red";
        }
    }
})

// input usuario cuando le hago focus----------------------------------------------------------------------------
inputUsuario.addEventListener("focus", ()=>{
    if (inputUsuario.value === "") {
        labelUsuario.classList.remove("label-usuario");
        labelUsuario.classList.add("label-activado");
        
        inputUsuario.style.borderBottom = "solid 3px rgb(0, 255, 0)";
    }
});

// input usuario cuando dejo de hacerle focus (blur) 
inputUsuario.addEventListener("blur", ()=>{
    if (inputUsuario.value === "") {
        labelUsuario.classList.remove("label-activado");
        labelUsuario.classList.add("label-usuario");
        
        inputUsuario.style.borderBottom = "none";
    }
});
//----------------------------------------------------------------------------------------------------------------

// input contraseña cuando le hago focus-------------------------------------------------------------------------
inputContraseña.addEventListener("focus", ()=>{
    if (inputContraseña.value === "") {
        labelContraseña.classList.remove("label-contraseña");
        labelContraseña.classList.add("label-activado");
        
        inputContraseña.style.borderBottom = "solid 3px rgb(0, 255, 0)";
    }
});

// input contraseña cuando dejo de hacerle focus (blur)
inputContraseña.addEventListener("blur", ()=>{
    if (inputContraseña.value === "") {
        labelContraseña.classList.remove("label-activado");
        labelContraseña.classList.add("label-contraseña");
        
        inputContraseña.style.borderBottom = "none";
    }
});
//----------------------------------------------------------------------------------------------------------------