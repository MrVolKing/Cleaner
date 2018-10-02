
// const menu = document.getElementById('menu');

// const link = document.getElementById('link');
// const number = document.getElementById('number');
{
var b = document.getElementById("humburger");

if (b){


const humburger = document.getElementById('humburger');
const menuadpt = document.getElementById('menuadpt');
const burgerline2 = document.getElementById('line2');
const burgerline1 = document.getElementById('line1');
const burgerline3 = document.getElementById('line3');
const foto1 = document.getElementById('foto1');
const foto2 = document.getElementById('foto2');
const foto3 = document.getElementById('foto3');
const foto4 = document.getElementById('foto4');
const foto5 = document.getElementById('foto5');
const itemmenu = document.getElementById('itemmenu');
const itemmenu1 = document.getElementById('itemmenu1');
const itemmenu2 = document.getElementById('itemmenu2');
const itemmenu3 = document.getElementById('itemmenu3');

humburger.addEventListener('click', () => {
    humburger.classList.toggle('mrg');
    menuadpt.classList.toggle('menuadapt');
    burgerline2.classList.toggle('line-hidden');
    burgerline1.classList.toggle('line1-transform');
    burgerline3.classList.toggle('line3-transform');
});

itemmenu.addEventListener('click', () => {
    menuadpt.classList.remove('menuadapt');
    burgerline2.classList.toggle('line-hidden');
    burgerline1.classList.toggle('line1-transform');
    burgerline3.classList.toggle('line3-transform');
    
});
itemmenu1.addEventListener('click', () => {
    menuadpt.classList.remove('menuadapt');
    burgerline2.classList.toggle('line-hidden');
    burgerline1.classList.toggle('line1-transform');
    burgerline3.classList.toggle('line3-transform');
    
});
itemmenu2.addEventListener('click', () => {
    menuadpt.classList.remove('menuadapt');
    burgerline2.classList.toggle('line-hidden');
    burgerline1.classList.toggle('line1-transform');
    burgerline3.classList.toggle('line3-transform');
    
});
itemmenu3.addEventListener('click', () => {
    menuadpt.classList.remove('menuadapt');
    burgerline2.classList.toggle('line-hidden');
    burgerline1.classList.toggle('line1-transform');
    burgerline3.classList.toggle('line3-transform');
    
});


}
};



