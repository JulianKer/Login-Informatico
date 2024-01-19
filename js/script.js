const inputUsuario = document.querySelector("#usuario");
const inputContraseña = document.querySelector("#contraseña");
const labelUsuario = document.querySelector(".label-usuario");
const labelContraseña = document.querySelector(".label-contraseña");

console.log(inputUsuario);
console.log(inputContraseña);
console.log(labelUsuario);
console.log(labelContraseña);

inputUsuario.addEventListener("focus", ()=>{
    if (inputUsuario.value === "") {
        labelUsuario.classList.remove("label-usuario");
        labelUsuario.classList.add("label-activado");

        inputUsuario.style.borderBottom = "solid 3px rgb(0, 255, 0)";
    }
});

inputUsuario.addEventListener("blur", ()=>{
    if (inputUsuario.value === "") {
        labelUsuario.classList.remove("label-activado");
        labelUsuario.classList.add("label-usuario");

        inputUsuario.style.borderBottom = "none";
    }
});

inputContraseña.addEventListener("focus", ()=>{
    if (inputContraseña.value === "") {
        labelContraseña.classList.remove("label-contraseña");
        labelContraseña.classList.add("label-activado");

        inputContraseña.style.borderBottom = "solid 3px rgb(0, 255, 0)";
    }
});

inputContraseña.addEventListener("blur", ()=>{
    if (inputContraseña.value === "") {
        labelContraseña.classList.remove("label-activado");
        labelContraseña.classList.add("label-contraseña");

        inputContraseña.style.borderBottom = "none";
    }
});