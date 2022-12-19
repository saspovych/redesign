function addWidget(widget, cols = 1, rows = 1) {
   switch(widget) {
      case "chat":
         gridElement.innerHTML = "<div>Чат</div>"
         break
      case "calendar":
         gridElement.innerHTML = "<div>Календарь</div>"
         break
      case "chart":
         gridElement.innerHTML = "<div>График</div>"
         break
      case "mail":
         gridElement.innerHTML = "<div>Почта</div>"
         break
      case "statistic":
         gridElement.innerHTML = "<div>Статистика</div>"
         break
   }

   if (rows > 1) {
      expandWidgetInRow(rows)
   }
   if (cols > 1) {
      expandWidgetInColumn(cols)
   }

   gridElement.classList.remove("empty_element")
   gridElement.classList.add("widget")
   contextMenu.style.display = "none"
   addDragAndDropEvents()
}

function expandWidgetInRow(rows) {
   const gridElements = document.querySelectorAll(".grid_element")
   const gridElementIndex = +gridElement.getAttribute("id")
   const numberElementsInRow = Math.floor(document.body.clientWidth / 225)

   if (Math.floor(gridElementIndex / numberElementsInRow) < Math.floor((gridElementIndex + rows - 1) / numberElementsInRow)) {
      for (let i = 1; i < rows; i++) {
         gridElements[gridElementIndex - i].style.display = "none"
      }
   } else {
      for (let i = 1; i < rows; i++) {
         gridElements[gridElementIndex + i].style.display = "none"
      }
   }
   gridElement.style.width = `${ 200 * rows + 25 * (rows - 1) }px`
}

function expandWidgetInColumn(cols) {
   const gridElements = document.querySelectorAll(".grid_element")
   const gridElementIndex = +gridElement.getAttribute("id")
   const numberElementsInRow = Math.floor(document.body.clientWidth / 225)

   if (gridElementIndex + numberElementsInRow * cols - 1 > gridElements.length) {
      for (let i = 1; i < cols; i++) {
         gridElements[gridElementIndex - numberElementsInRow * i].style.display = "none"
      }
   } else {
      for (let i = 1; i < cols; i++) {
         console.log(gridElementIndex + numberElementsInRow * i)
         gridElements[gridElementIndex + numberElementsInRow * i].style.display = "none"
      }
   }
}
