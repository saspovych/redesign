let toggle = false

function editToggle() {
   const emptyElements = document.querySelectorAll(".empty_element")

   emptyElements.forEach((element) => {
      if (toggle) {
         element.classList.remove("hidden")
      } else {
         element.classList.add("hidden")
      }
   })
   toggle = !toggle
}