document.body.style.backgroundImage = "url('./img/apple_true.jpg')";

let adv = document.querySelector('.adv');
adv.parentNode.removeChild(adv);

let title = document.getElementById('title');
title.textContent =  ' Мы продаём только подлинную технику Apple';



let prmpt = document.querySelector('.prompt');
  let question = prompt('Как вы относитесь к технике Apple?');
prmpt.textContent = question;


let box = document.querySelector('nav .menu'),
    btns = document.getElementsByClassName('menu-item'),
    btn = document.createElement('li'),
    text = document.createTextNode('Пятый пункт'),
    btnNew = btns[1];
    
box.replaceChild(btns[2], btns[1]);
box.insertBefore(btnNew, btns[2]);
btn.classList.add('menu-item');
btn.appendChild(text);
box.appendChild(btn);