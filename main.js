const grid = document.getElementById("grid")
const gridWidth = grid.clientWidth
const gridHeight = grid.clientHeight
const numberElementsInRow = Math.floor(gridWidth / (200 + 25))
const numberElementsInColumn = Math.floor(gridHeight / (200 + 25))

let divs = []
for (let i = 0; i < numberElementsInColumn; i++) {
   const row = []
   for (let j = 0; j < numberElementsInRow; j++) {
      row.push(`<div class="grid_element">
                     <a class="uk-icon-button uk-icon" uk-icon="plus"></a>
               </div>`)
   }
   divs.push(`<div class="grid_row">${row.join("")}</div>`)
}
grid.innerHTML = divs.join("")
