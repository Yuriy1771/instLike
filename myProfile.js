const changeStatus = document.querySelector('#status');
let modal = document.querySelector('.myModal');
let save = document.querySelector('#btnModalSave');
let close = document.querySelector('#close');
let status1 = document.querySelector('#status');

changeStatus.onclick = () => {
    modal.style.display = 'block';
}

close.onclick = () => {
    modal.style.display = 'none';
}

window.onclick = (event) => {
    if(event.target === modal) {
        modal.style.display = 'none';
    }
}


let textArea;

save.onclick = () => {
    textArea = document.querySelector('#textareaStatus').value;
    status1.innerHTML = textArea;
    modal.style.display = 'none';
}

const btnNews = document.querySelector('#btnNews');

btnNews.onclick = () => {
    document.location.href = 'index.HTML';
}

const instaLogo = document.querySelector('#instaLogo');

instaLogo.onclick = () => {
    document.location.href = 'index.HTML';
}