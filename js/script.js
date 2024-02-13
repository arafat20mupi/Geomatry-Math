// Triangle 
const triangleBase = document.getElementById('triangleBase')
const triangleheight = document.getAnimations('triangleHeight')
const triangleCalculator = document.getElementById('triangleCalculator')
const triangleAreaSpan = document.getElementById('triangleAreaSpan')
triangleCalculator.addEventListener('click' ,function(){
    const baseNumber = triangleBase.value 
    const parseBase = parseFloat(baseNumber)
    const heightNumber = triangleHeight.value
    const parseHeight = parseFloat(heightNumber)
    const triangleArea = 0.5 * parseBase * parseHeight
    triangleAreaSpan.innerText  = triangleArea
})