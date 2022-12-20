const contextMenu = document.getElementById("contextMenu")

grid.addEventListener("click", (event) => {
   if (event.composedPath().find((tag) => tag?.classList?.contains("grid_element") ?? false)) {
         const x = event.clientX
         const y = event.clientY

         contextMenu.style.display = "block"
         contextMenu.style.top = `${y + 310 > grid.clientHeight ? y - 330 : y - 10}px`
         contextMenu.style.left = `${x + 240 > grid.clientWidth ? x - 240 : x + 20}px`

         gridElement = event.composedPath().find((tag) => tag.classList.contains("grid_element"))
         gridElementIndex = +gridElement.getAttribute("id")
   } else {
      contextMenu.style.display = "none"
   }
})