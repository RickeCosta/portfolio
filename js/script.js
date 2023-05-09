const title = document.querySelector('.title');
const text = title.textContent;
const splitText = text.split('');
title.textContent = '';

for(let i=0; i < splitText.length; i++) {
  title.innerHTML += '<h1>' + splitText[i] + '</h1>';
}


const title2 = document.querySelector('.des');
const text2 = title.textContent;
const splitText2 = text.split('');
title.textContent = '';

for(let i=0; i < splitText.length; i++) {
  title.innerHTML += '<p>' + splitText[i] + '</p>';
}