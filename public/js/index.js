document.querySelector('button#contactBtn').addEventListener('click', () => {
    window.location.href = './public/html/contact.html';
})

document.querySelector('#iconTop').addEventListener('click', e => {
    scrollTo(0, 0);
});

document.querySelector('#openNav').addEventListener('click', e => {
    if(document.querySelector('#openNav').className == "fa-solid fa-bars"){
        document.querySelector('ul').style.display = 'block';
        document.querySelector('#openNav').className = "fa-solid fa-xmark";
    }else{
        document.querySelector('ul').style.display = 'none';
        document.querySelector('#openNav').className = "fa-solid fa-bars";
    }
});