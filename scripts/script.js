let container = document.querySelector('.container')
let buttonNewGrid = document.querySelector('#grid-button')

const gridBlock = document.createElement('div')
gridBlock.classList.add('grid__block')

function randomRGB () {
  return Math.floor(Math.random() * 255)
}
function newGrid (blocksCount) {
  let calculateWidth = 960 / blocksCount - 1

  for (let i = 0; i < blocksCount * blocksCount; i++) {
    const gridBlock = document.createElement('div')
    gridBlock.classList.add('grid__block')
    gridBlock.setAttribute(
      'style',
      `width: ${calculateWidth}px; max-width:${calculateWidth}`
    )
    let opacity = 0

    gridBlock.addEventListener('mouseenter', () => {
      opacity += 0.1

      gridBlock.style.backgroundColor = `rgb(${randomRGB()}, ${randomRGB()}, ${randomRGB()})`
      gridBlock.style.opacity = `${opacity}`
    })

    container.append(gridBlock)
    console.log(gridBlock.style)
  }
}
newGrid(32) // x^2
buttonNewGrid.addEventListener('click', () => {
  let allGridBlocks = document.querySelectorAll('.grid__block')
  allGridBlocks.forEach(block => {
    block.remove()
  })
  let customBlocksCounts = prompt(
    'Give number od block in row. ( eg.16 = 16x16 grid )'
  )
  while (customBlocksCounts > 100 || customBlocksCounts < 1) {
    customBlocksCounts = prompt('Give number not bigger than 100')
  }
  newGrid(customBlocksCounts)
})
