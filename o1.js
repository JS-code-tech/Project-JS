const lin1 = document.querySelector('.lin1'),
lin2 = document.querySelector('.lin2'),
lin3 = document.querySelector('.lin3'),
sliy = document.querySelector('.sliy'),
nextbutton = document.querySelector('button'),
activ = document.querySelector('.activ'),
col = document.querySelector('.col'),
kod = document.querySelector('#parol'),
inp = document.querySelector('input');



lin1.addEventListener('click',function(){
    sliy.style.transform = 'translateX(-0%)';
    activ.style.left = '15%';
    activ.style.width= '0px';
    lin1.style.backgroundColor = 'rgb(219, 24, 144)';
    lin2.style.backgroundColor = '#fff';
    lin3.style.backgroundColor = '#fff';





});
lin2.addEventListener('click',function(){
    sliy.style.transform = 'translateX(-33%)';
    activ.style.left = '35%';
    activ.style.width= '120px';
    lin2.style.backgroundColor = 'rgb(219, 24, 144)';
    lin3.style.backgroundColor = '#fff';
    lin1.style.backgroundColor = '#fff';
    

});
lin3.addEventListener('click',function(){
    sliy.style.transform = 'translateX(-66%)';
    activ.style.left = '86%';
    activ.style.width= '0px';
    lin3.style.backgroundColor = 'rgb(219, 24, 144)';
    lin2.style.backgroundColor = '#fff';
    lin1.style.backgroundColor = '#fff';



});

nextbutton.addEventListener('click',  function () {
    let x = kod.value;

   if (x === '122333') {
    console.log('false');
    kod.style.borderColor = 'rgba(9, 255, 38, 0.445)';
    sliy.style.transform = 'translateX(-33%)';
    activ.style.left = '35%';
    activ.style.width= '120px';
    lin2.style.backgroundColor = 'rgb(219, 24, 144)';
    lin3.style.backgroundColor = '#fff';
    lin1.style.backgroundColor = '#fff';


   } else {
    kod.style.borderColor = 'rgba(245, 1, 1, 0.395)';
   }










})
