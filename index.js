let open=document.querySelector('.menu-open');
let close=document.querySelector('.menu-close');
let layer=document.querySelector('.layer1');

open.addEventListener('click',function(){
    layer.classList.add('check');
})
close.addEventListener('click',function(){
    layer.classList.remove('check');
})