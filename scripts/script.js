let container = document.querySelector('.container')

const gridBlock = document.createElement('div')
gridBlock.classList.add('grid__block')

function newGrid (blocksCount) {
  let calculateWidth = 960 / blocksCount - 1
  for (let i = 0; i < blocksCount * blocksCount; i++) {
    const gridBlock = document.createElement('div')
    gridBlock.classList.add('grid__block')
    gridBlock.setAttribute(
      'style',
      `width: ${calculateWidth}px; max-width:${calculateWidth}`
    )
    gridBlock.addEventListener('mouseenter', () => {
      gridBlock.style.backgroundColor = 'white'
    })
    container.append(gridBlock)
    console.log(gridBlock.style)
  }
}
newGrid(54) // x^2
