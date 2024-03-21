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