const topsection = document.querySelector('.topsection')
const logo = document.querySelector('.logoimg');
const it = document.querySelector('.erp');
const energy = document.querySelector('.energy');
it.addEventListener('mouseover',e=>{
    console.log('hi')
    if(topsection.classList.contains('topsection') || topsection.classList.contains('topgreen')){
        topsection.classList.remove('topgreen');
        topsection.classList.remove('topsection')
    }
    topsection.classList.add('topblue');
    logo.src='./assets/images/it_wahni.png'
})
it.addEventListener('click',e=>{
    console.log('hi');
    if(topsection.classList.contains('topsection') || topsection.classList.contains('topgreen')){
        topsection.classList.remove('topgreen');
        topsection.classList.remove('topsection')
    }
    topsection.classList.add('topblue');
    logo.src='./assets/images/it_wahni.png'

})
energy.addEventListener('mouseover',e=>{
    if(topsection.classList.contains('topsection') || topsection.classList.contains('topblue')){
        topsection.classList.remove('topblue');
        topsection.classList.remove('topsection')
    }
    topsection.classList.add('topgreen');
    logo.src='./assets/images/green_wahni.png'

})
energy.addEventListener('click',e=>{
    if(topsection.classList.contains('topsection') || topsection.classList.contains('topblue')){
        topsection.classList.remove('topblue');
        topsection.classList.remove('topsection')
    }
    topsection.classList.add('topgreen');
    logo.src='./assets/images/green_wahni.png'

    })

    function findinnerWidth(){
        if(window.innerWidth >1024){
            return 1440;
        }else if(window.innerWidth <=1024 && window.innerWidth > 768){
            return 1024;
        }else if(window.innerWidth <=768 && window.innerWidth > 425){
            return 768;
        }else{
            return 425;
        }
    }