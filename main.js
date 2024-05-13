let btn = document.querySelector('.btn');
let list = document.querySelector('.list');

let removeclass = () => {
    list.classList.remove('listopen', 'listclose');
}

btn.addEventListener('click', () => {
    if(list.classList.contains('listopen')){
        list.classList.add('listclose');
        btn.classList.remove('btnclose');
        list.addEventListener('animationend', removeclass);
    } else {
        list.classList.add('listopen');
        btn.classList.add('btnclose');
        list.removeEventListener('animationend', removeclass);
    }
});

// demo
if(location.href.match('jspage.html')){
    const button = document.querySelector('.button');
    const image = document.querySelector('.image');
    
    button.addEventListener('click', () => {
        if(image.classList.contains('changeimage')){
            image.classList.remove('changeimage');
        } else {
            image.classList.add('changeimage');
        }
    });
}

// copy code to clipboard
let container = document.querySelector('.container');

container.addEventListener('click', (evt) => {
    if(evt.target.matches('.code') || evt.target.matches('.code *')){
        navigator.clipboard.writeText(evt.target.textContent.trim());
        evt.target.classList.add('copied');
        setTimeout(() => {evt.target.classList.remove('copied')}, 1000)
    }
});