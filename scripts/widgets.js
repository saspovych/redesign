let isCanAddWidget = true
let notificationMessage = "Нельзя добавить этот виджет, так как, он удалит существующий виджет на своём пути"
let widgetIndex = 0
let widgetAreaName = `widget-${widgetIndex}`

function addWidget(widgetName, cols = 1, rows = 1) {
   if (rows > 1) {
      expandWidgetInRow(rows)
   }
   if (cols > 1) {
      expandWidgetInColumn(cols)
   }
   if (rows === 1 && cols === 1) {
      isCanAddWidget = true

      const gridRow = Math.floor(gridElementIndex / numberElementsInRow)
      const gridCol = gridElementIndex % numberElementsInRow

      gridLayout[gridRow][gridCol] = widgetAreaName
      gridElement.style.gridArea = widgetAreaName
      gridElement.classList.remove("empty_element")
      gridElement.classList.add("widget")
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

      addDragAndDropEvents()
      contextMenu.style.display = "none"
      grid.style.gridTemplateAreas = `'${gridLayout.map((row) => row.join(" ")).join("' '")}'`
      widgetIndex++
      widgetAreaName = `widget-${widgetIndex}`
   } else {
      UIkit.notification({message: notificationMessage, status: "danger"})
   }
}

function expandWidgetInRow(rows) {
   const gridRow = Math.floor(gridElementIndex / numberElementsInRow)
   const gridCol = gridElementIndex % numberElementsInRow
   isCanAddWidget = true

   if (Math.floor(gridElementIndex / numberElementsInRow) < Math.floor((gridElementIndex + rows - 1) / numberElementsInRow)) {
      for (let i = 1; i < rows; i++) {
         if (!gridEmptyLayout.includes(gridLayout[gridRow][gridCol - i])) {
            isCanAddWidget = false
            notificationMessage = "Нельзя добавить этот виджет, так как, он удалит виджет стоящий слева от него"
            break
         }
      }

      if (isCanAddWidget) {
         gridLayout[gridRow][gridCol] = widgetAreaName
         setDivGridAreaName(gridElementIndex)
         for (let i = 1; i < rows; i++) {
            gridLayout[gridRow][gridCol - i] = widgetAreaName
            document.getElementById(`${gridElementIndex - i}`).style.display = "none"
         }
      }
   } else {
      for (let i = 1; i < rows; i++) {
         if (!gridEmptyLayout.includes(gridLayout[gridRow][gridCol + i])) {
            isCanAddWidget = false
            notificationMessage = "Нельзя добавить этот виджет, так как, он удалит виджет стоящий справа от него"
            break
         }
      }

      if (isCanAddWidget) {
         gridLayout[gridRow][gridCol] = widgetAreaName
         setDivGridAreaName(gridElementIndex)
         for (let i = 1; i < rows; i++) {
            gridLayout[gridRow][gridCol + i] = widgetAreaName
            document.getElementById(`${gridElementIndex + i}`).style.display = "none"
         }
      }
   }

   if (isCanAddWidget) {
      gridElement.style.width = `${ 200 * rows + 25 * (rows - 1) }px`
   }
}

function expandWidgetInColumn(cols) {
   const gridElements = document.querySelectorAll(".grid_element")
   const gridRow = Math.floor(gridElementIndex / numberElementsInRow)
   const gridCol = gridElementIndex % numberElementsInRow
   isCanAddWidget = true

   if (gridElementIndex + numberElementsInRow * (cols - 1) > gridElements.length) {
      for (let i = 1; i < cols; i++) {
         if (!gridEmptyLayout.includes(gridLayout[gridRow - i][gridCol])) {
            isCanAddWidget = false
            notificationMessage = "Нельзя добавить этот виджет, так как, он удалит виджет стоящий сверху от него"
            break
         }
      }

      if (isCanAddWidget) {
         gridLayout[gridRow][gridCol] = widgetAreaName
         setDivGridAreaName(gridElementIndex)
         for (let i = 1; i < cols; i++) {
            gridLayout[gridRow - i][gridCol] = widgetAreaName
            document.getElementById(`${gridElementIndex - numberElementsInRow * i}`).style.display = "none"
         }
      }
   } else {
      for (let i = 1; i < cols; i++) {
         if (!gridEmptyLayout.includes(gridLayout[gridRow + i][gridCol])) {
            isCanAddWidget = false
            notificationMessage = "Нельзя добавить этот виджет, так как, он удалит виджет стоящий снизу от него"
            break
         }
      }

      if (isCanAddWidget) {
         gridLayout[gridRow][gridCol] = widgetAreaName
         setDivGridAreaName(gridElementIndex)
         for (let i = 1; i < cols; i++) {
            gridLayout[gridRow + i][gridCol] = widgetAreaName
            document.getElementById(`${gridElementIndex + numberElementsInRow * i}`).style.display = "none"
         }
      }
   }

   if (isCanAddWidget) {
      gridElement.style.height = `${ 200 * cols + 25 * ((cols - 1)) }px`
   }
}

function setDivGridAreaName(divId) {
   const div = document.getElementById(`${divId}`)
   div.style.gridArea = widgetAreaName
   div.classList.remove("empty_element")
   div.classList.add("widget")
}
