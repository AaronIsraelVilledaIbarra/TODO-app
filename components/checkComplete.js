const checkComplete = () => {
    const i = document.createElement("i");
    i.classList.add("far", "fa-check-square", "icon");
    i.addEventListener("click", completeTask);
    return i;
};
// Inmediately invoked funtion expression IIFE ó expresión de funcion ejecutada inmediatamente (funciones que en cuanto se declaran se ejecutan)
const completeTask = (event) => {
    const element = event.target;
    element.classList.toggle("fas");
    element.classList.toggle("completeIcon");
    element.classList.toggle("far");
};

export default checkComplete;