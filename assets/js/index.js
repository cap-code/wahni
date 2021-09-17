const energy = document.querySelector('.energy');
const it = document.querySelector('.it');

energy.addEventListener('mouseover',evt=>{
    energy.classList.remove('animateout')
    energy.classList.add('animatein');
})
it.addEventListener('mouseover',evt=>{
    it.classList.remove('animateout')
    it.classList.add('animatein');
})

energy.addEventListener('mouseout',evt=>{
    energy.classList.remove('animatein')
    energy.classList.add('animateout');
})
it.addEventListener('mouseout',evt=>{
    it.classList.remove('animatein')
    it.classList.add('animateout');
})