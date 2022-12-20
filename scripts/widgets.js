let isCanAddWidget = true
let notificationMessage = "Нельзя добавить этот виджет, так как, он удалит существующий виджет на своём пути."

function addWidget(widgetName, cols = 1, rows = 1) {
   let gridWidgetName = widgetName
   if (rows > 1) {
      expandWidgetInRow(widgetName, rows)
   }
   if (cols > 1) {
      expandWidgetInColumn(widgetName, cols)
   }
   if (rows === 1 && cols === 1) {
      isCanAddWidget = true

      const gridRow = Math.floor(gridElementIndex / numberElementsInRow)
      const gridCol = gridElementIndex % numberElementsInRow

      gridLayout[gridRow][gridCol] = gridWidgetName
   }

   if (isCanAddWidget) {
      switch(widgetName) {
         case "chat":
            gridElement.innerHTML = "<div>Чат</div>"
            break
         case "calendar":
            gridElement.innerHTML = "<div>Календарь скидок</div>"
            break
         case "chart":
            gridElement.innerHTML = "<div>График продаж</div>"
            break
         case "mail":
            gridElement.innerHTML = "<div>Корпоративная почта</div>"
            break
         case "statistic":
            gridElement.innerHTML = "<div>Статистика увольнений</div>"
            break
      }

      gridElement.classList.remove("empty_element")
      gridElement.classList.add("widget")
      addDragAndDropEvents()
      contextMenu.style.display = "none"
   } else {
      UIkit.notification({message: notificationMessage, status: "danger"})
   }
}

function expandWidgetInRow(widgetName, rows) {
   const gridElements = document.querySelectorAll(".grid_element")
   const gridRow = Math.floor(gridElementIndex / numberElementsInRow)
   const gridCol = gridElementIndex % numberElementsInRow
   isCanAddWidget = true

   if (Math.floor(gridElementIndex / numberElementsInRow) < Math.floor((gridElementIndex + rows - 1) / numberElementsInRow)) {
      for (let i = 1; i < rows; i++) {
         if (gridLayout[gridRow][gridCol - i] !== "empty") {
            isCanAddWidget = false
            notificationMessage = "Нельзя добавить этот виджет, так как, он удалит виджет стоящий слева от него."
            break
         }
      }

      if (isCanAddWidget) {
         gridLayout[gridRow][gridCol] = widgetName
         for (let i = 1; i < rows; i++) {
            gridLayout[gridRow][gridCol - i] = widgetName
            gridElements[gridElementIndex - i].style.display = "none"
         }
      }
   } else {
      for (let i = 1; i < rows; i++) {
         if (gridLayout[gridRow][gridCol + i] !== "empty") {
            isCanAddWidget = false
            notificationMessage = "Нельзя добавить этот виджет, так как, он удалит виджет стоящий справа от него"
            break
         }
      }

      if (isCanAddWidget) {
         gridLayout[gridRow][gridCol] = widgetName
         for (let i = 1; i < rows; i++) {
            gridLayout[gridRow][gridCol + i] = widgetName
            gridElements[gridElementIndex + i].style.display = "none"
         }
      }
   }

   if (isCanAddWidget) {
      gridElement.style.width = `${ 200 * rows + 25 * (rows - 1) }px`
   }
}

function expandWidgetInColumn(widgetName, cols) {
   const gridElements = document.querySelectorAll(".grid_element")
   const gridRow = Math.floor(gridElementIndex / numberElementsInRow)
   const gridCol = gridElementIndex % numberElementsInRow
   isCanAddWidget = true

   if (gridElementIndex + numberElementsInRow * cols - 1 > gridElements.length) {
      for (let i = 1; i < cols; i++) {
         if (gridLayout[gridRow - i][gridCol] !== "empty") {
            isCanAddWidget = false
            notificationMessage = "Нельзя добавить этот виджет, так как, он удалит виджет стоящий сверху от него"
            break
         }
      }

      if (isCanAddWidget) {
         gridLayout[gridRow][gridCol] = widgetName
         for (let i = 1; i < cols; i++) {
            gridLayout[gridRow - i][gridCol] = widgetName
            // gridElements[gridElementIndex - numberElementsInRow * i].style.display = "none"
         }
      }
   } else {
      for (let i = 1; i < cols; i++) {
         if (gridLayout[gridRow + i][gridCol] !== "empty") {
            isCanAddWidget = false
            notificationMessage = "Нельзя добавить этот виджет, так как, он удалит виджет стоящий снизу от него"
            break
         }
      }

      if (isCanAddWidget) {
         gridLayout[gridRow][gridCol] = widgetName
         for (let i = 1; i < cols; i++) {
            gridLayout[gridRow + i][gridCol] = widgetName
         // gridElements[gridElementIndex + numberElementsInRow * i].style.display = "none"
         }
      }
   }
}
