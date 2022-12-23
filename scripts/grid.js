const grid = document.getElementById("grid")
let gridElement
let gridElementIndex = 0
let gridLayout = []
let gridElementsLayout = []
let gridEmptyLayout = []

const numberElementsInRow = Math.floor((document.body.clientWidth - 200) / 225)
const numberElementsInColumn = Math.floor((document.body.clientHeight - 200) / 225)

function generateGrid() {
   let divs = []
   let index = 0

   for (let i = 0; i < numberElementsInColumn; i++) {
      const layoutRow = []
      const elementsRow = []
      for (let j = 0; j < numberElementsInRow; j++) {
         const newDiv = `<div id="${ index }" class="grid_element empty_element" style="grid-area: empty-${index}">
         <a class="uk-icon-button uk-icon" uk-icon="plus"></a>
         </div>`
         divs.push(newDiv)
         elementsRow.push(newDiv)
         gridEmptyLayout.push(`empty-${index}`)
         layoutRow.push(`empty-${index}`)
         index++
      }

      gridElementsLayout.push(elementsRow)
      gridLayout.push(layoutRow)
   }

   grid.innerHTML = divs.join("")
   grid.style.gridTemplateAreas = `'${gridLayout.map((row) => row.join(" ")).join("' '")}'`
   addDragAndDropEvents()
}
generateGrid()
