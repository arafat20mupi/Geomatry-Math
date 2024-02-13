//--------------Triangle ---------------
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

// ---------rectangle--------------
const rectangleCalculator = document.getElementById('rectangleCalculator');
const rectangleWeight = document.getElementById('rectangleWeight');
const rectangleLenght = document.getElementById('rectangleLenght');
const rectangleAreaSpan =document.getElementById('rectangleAreaSpan');
rectangleCalculator.addEventListener('click' , function(){
    const weightNumber = rectangleWeight.value
    const parseWeight = parseFloat(weightNumber)
    const lenghtNumber = rectangleLenght.value
    const parseLenght = parseFloat(lenghtNumber)
    const rectangleArea = parseWeight * parseLenght
    rectangleAreaSpan.innerText = rectangleArea
})

// ----------parallelogram-----------
const parallelogramCalculate = document.getElementById('parallelogramCalculate')
const parallelogramBase = document.getElementById('parallelogramBase')
const parallelogramHeight = document.getElementById('parallelogramHeight')
const parallelogramAreaSpan = document.getElementById('parallelogramAreaSpan')
parallelogramCalculate.addEventListener('click' , function(){
    const baseNumber = parallelogramBase.value
    const parseBase = parseFloat(baseNumber)
    const heightNumber = parallelogramHeight.value
    const parseHeight = parseFloat(heightNumber)
    const parallelogramArea = parseBase * parseHeight
    parallelogramAreaSpan.innerText = parallelogramArea
})

// ---------Rhombus ---------------

const rhombusCalculate = document.getElementById('rhombusCalculate')
const rhombusD1 = document.getElementById('rhombusD1')
const rhombusD2 = document.getElementById('rhombusD2')
const rhombusAreaSpan = document.getElementById('rhombusAreaSpan')
rhombusCalculate.addEventListener('click' ,function(){
    const rhombusD1Number = rhombusD1.value
    const parseD1 = parseFloat(rhombusD1Number)
    const rhombusD2Number = rhombusD2.value
    const parseD2 = parseFloat(rhombusD2Number)
    const rhombusArea = 0.5 * parseD1 * parseD2
    rhombusAreaSpan.innerText = rhombusArea
})
// ----------Pentagon----------
const pentagonCalculate = document.getElementById('pentagonCalculate')
const pentagonP = document.getElementById('pentagonP')
const pentagonB = document.getElementById('pentagonB')
const pentagonAreaSpan = document.getElementById('pentagonAreaSpan')
pentagonCalculate.addEventListener('click' ,function(){
    const pentagonP_Number = pentagonP.value
    const parseP = parseFloat(pentagonP_Number)
    const pentagonB_Number = pentagonB.value
    const parseB = parseFloat(pentagonB_Number)
    const pentagonArea = 0.5 * parseP * parseB
    pentagonAreaSpan.innerText = pentagonArea
})
// ------------Ellipse------------
const ellipseCalculate = document.getElementById('ellipseCalculate')
const ellipseA = document.getElementById('ellipseA')
const ellipseB = document.getElementById('ellipseB')
const ellipseAreaSpan = document.getElementById('ellipseAreaSpan')
ellipseCalculate.addEventListener('click' ,function(){
    const ellipseA_Number = ellipseA.value
    const parseA = parseFloat(ellipseA_Number)
    const ellipseB_Number = ellipseB.value
    const parseB = parseFloat(ellipseB_Number)
    const ellipseArea = 3.1416 * parseA * parseB
    ellipseAreaSpan.innerText = ellipseArea
})