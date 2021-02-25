document.addEventListener("DOMContentLoaded", function () {
  // initializes the board
  init();

  // ADD CODE HERE!

  // add to the list
  const ul = document.querySelector("ul#moves-container")
  document.addEventListener("keydown", function (event) {
    if (event.key === "ArrowLeft" || event.key === "ArrowRight" || event.key === "ArrowUp" || event.key === "ArrowDown") {
      const li = document.createElement("li")
      li.innerHTML = event.key.substr(5).toLowerCase()
      ul.append(li)
    }
  })

  // move the first move only, on normal click
  const button = document.querySelector("button#move-button")
  button.addEventListener("click", function (event) {
    let moveItem = ul.firstChild
    move(moveItem.textContent)
    moveItem.remove()
  })

  //remove a move from the list
  ul.addEventListener("click", function (event) {
    let moveItem = event.target
    moveItem.remove()
  })

  //on right click, move through list of moves
  button.addEventListener("contextmenu", function (event) {
    event.preventDefault()

    const movesTimer = setInterval(function () {
      if (ul.children.length == 0) {
        clearInterval(movesTimer)
      } else {
        let moveItem = ul.firstChild
        move(moveItem.textContent)
        moveItem.remove()
      }
    }, 500)

  })
});
