const grid = document.getElementById("grid")
let gridElement
let gridElementIndex = 0
let gridLayout = []

const numberElementsInRow = Math.floor(document.body.clientWidth / 225)
const numberElementsInColumn = Math.floor(document.body.clientHeight / 225)

function generateGrid() {
   let divs = []
   let index = 0

   for (let i = 0; i < numberElementsInColumn; i++) {
      const layoutRow = []
      for (let j = 0; j < numberElementsInRow; j++) {
         divs.push(`<div id="${ index }" class="grid_element empty_element" style="grid-area: empty-${index}">
         <a class="uk-icon-button uk-icon" uk-icon="plus"></a>
         </div>`)
         layoutRow.push(`empty-${index}`)
         index++
      }

      gridLayout.push(layoutRow.join(" "))
   }

   console.log(gridLayout)

   grid.innerHTML = divs.join("")
   grid.style.gridTemplateAreas = `"empty-0 empty-0 empty-2 empty-3" "empty-0 empty-0 empty-6 empty-3" "empty-8 empty-9 empty-10 empty-3"`
   addDragAndDropEvents()
}
generateGrid()
