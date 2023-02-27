document.querySelector('#openNav').addEventListener('click', e => {
    if(document.querySelector('#openNav').className == "fa-solid fa-bars"){
        document.querySelector('ul').style.display = 'block';
        document.querySelector('#openNav').className = "fa-solid fa-xmark";
    }else{
        document.querySelector('ul').style.display = 'none';
        document.querySelector('#openNav').className = "fa-solid fa-bars";
    }
});

document.querySelector('form').addEventListener('submit', e => {
    e.preventDefault();
    window.location.href = 'emailSent.html';
});