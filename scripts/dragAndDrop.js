function addDragAndDropEvents() {
   const widgets = document.querySelectorAll(".widget")
   const emptyElements = document.querySelectorAll(".empty_element")

   widgets.forEach((widget) => {
      widget.onmousedown = (event) => {
         event.preventDefault()

         const ghost = widget.cloneNode(true)
         const oldWidget = widget
         let newWidget = null

         const moveAt = (event) => {
            const x = event.clientX
            const y = event.clientY

            ghost.style.left = `${x + 250 > grid.clientWidth ? x - 230 : x + 30}px`
            ghost.style.top = `${y + 220 > grid.clientHeight ? y - 200 : y}px`
         }

         ghost.style.position = "absolute"
         ghost.style.background = "#e5e5e5"
         document.body.appendChild(ghost)
         moveAt(event)


         emptyElements.forEach((element) => {
            element.classList.add("empty_preview")
         })

         document.onmousemove = (event) => {
            moveAt(event)
            const element = event.composedPath().find((tag) => tag?.classList?.contains("grid_element"))

            emptyElements.forEach((element) => {
               element.innerHTML = `<a class="uk-icon-button uk-icon" uk-icon="plus"></a>`
            })

            if (element && element !== oldWidget) {
               newWidget = element
               newWidget.innerHTML = ghost.innerHTML
            } else {
               newWidget = null
            }
         }

         document.onmouseup = () => {
            emptyElements.forEach((element) => {
               element.classList.remove("empty_preview")
            })

            if (newWidget) {
               newWidget.innerHTML = oldWidget.innerHTML
               newWidget.classList.add("widget")
               newWidget.classList.remove("empty_element")

               oldWidget.classList.remove("widget")
               oldWidget.classList.add("empty_element")
               oldWidget.innerHTML = `<a class="uk-icon-button uk-icon" uk-icon="plus"></a>`
            }


            widget.onmousedown = null
            document.body.removeChild(ghost)
            document.onmousemove = null
            document.onmouseup = null

            addDragAndDropEvents()
         }
      }
   })
}
