const hearts = Array.from(document.getElementsByClassName('heart'));

hearts.forEach(element => {
    element.addEventListener('click',()=>{
        if(element.style.backgroundPosition===''||element.style.backgroundPosition==='left center'){
            element.classList.add('is_animating');
            element.style.backgroundPosition = 'right';
        }else{
            element.classList.add('is_animating-revert');
            element.style.backgroundPosition = 'left';
        }
    })
    element.addEventListener('animationend',()=>{
        element.classList.remove('is_animating');
        element.classList.remove('is_animating-revert');
    })
});