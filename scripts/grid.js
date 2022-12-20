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
      const row = []
      for (let j = 0; j < numberElementsInRow; j++) {
         row.push(`<div id="${ index }" class="grid_element empty_element">
         <a class="uk-icon-button uk-icon" uk-icon="plus"></a>
   </div>`)
         index++
      }
      gridLayout.push(row.map(() => "empty"))
      divs.push(`<div class="grid_row">${row.join("")}</div>`)
   }

   console.log(gridLayout)
   grid.innerHTML = divs.join("")
   addDragAndDropEvents()
}
generateGrid()
