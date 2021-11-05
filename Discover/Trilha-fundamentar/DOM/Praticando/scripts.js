const button = document.querySelector("#openModal")
const div = document.querySelector("div")

function removeInvisible() {
  div.classList.remove('invisible')
}

function addInvisible(event) {
  if (event.key == 'Escape') {
    div.classList.add('invisible')
  }
}

button.addEventListener("click", removeInvisible)
document.addEventListener("keydown", addInvisible)