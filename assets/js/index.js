const topsection = document.querySelector('.topsection')
const it = document.querySelector('.erp');
const energy = document.querySelector('.energy');
it.addEventListener('mouseover',e=>{
    console.log('hi')
    topsection.style.backgroundColor="#175a74"
})
it.addEventListener('click',e=>{
    console.log('hi')
    topsection.style.backgroundColor="#175a74"
})
energy.addEventListener('mouseover',e=>{
    topsection.style.backgroundColor="#42b649"
})
energy.addEventListener('click',e=>{
    topsection.style.backgroundColor="#42b649"
})