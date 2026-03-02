import { counter }  from "./actions.js";

const button = document.getElementById("button1")
const title = document.getElementById("title")

button.addEventListener("click", (e) => console.log(e) )
window.addEventListener("keydown", (e) => {
    title.innerText = `Last key pressed: ${e.key}`
    console.log(e)
    })

const increaseOne = counter(1)

