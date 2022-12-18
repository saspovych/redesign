function addChat() {
   gridElement.classList.remove("empty_element")
   gridElement.classList.add("widget")
   gridElement.innerHTML = "<div>Чат</div>"
   contextMenu.style.display = "none"
   addDragAndDropEvents()
}

function addCalendar() {
   gridElement.classList.remove("empty_element")
   gridElement.classList.add("widget")
   gridElement.innerHTML = "<div>Календарь</div>"
   contextMenu.style.display = "none"
   addDragAndDropEvents()
}

function addChart() {
   gridElement.classList.remove("empty_element")
   gridElement.classList.add("widget")
   gridElement.innerHTML = "<div>График</div>"
   contextMenu.style.display = "none"
   addDragAndDropEvents()
}

function addMail() {
   gridElement.classList.remove("empty_element")
   gridElement.classList.add("widget")
   gridElement.innerHTML = "<div>Почта</div>"
   contextMenu.style.display = "none"
   addDragAndDropEvents()
}