let imgLike = document.querySelector('#instagramHert');
let likeBtn = document.querySelector('#likeBtn');
let photoInst = document.querySelector('.imgInWindow');
let window1 = document.querySelector('.window');

let isPhotoClicked = false;

window1.ondblclick = () => {
    checkLets();
    clickedToPhoto();
    // if(isPhotoClicked) {
    //     imgLike.style.display = 'none';
    //     likeBtn.style.background = 'none';
    //     isPhotoClicked = false;
    // }else {
    //     imgLike.style.display = 'block';
    //     likeBtn.style.background = 'red';
    //     isPhotoClicked = true;

    // }
}

 let wholiked;

function checkLets() {
    wholiked = document.querySelector('#wholiked');
}

function clickedToPhoto() {
    if(isPhotoClicked) {
        imgLike.style.display = 'none';
        likeBtn.style.background = 'none';
        wholiked.innerText += '';
        isPhotoClicked = false;
    }else {
        imgLike.style.display = 'block';
        likeBtn.style.background = 'red';
        wholiked.innerText += 'Yuriy';
        isPhotoClicked = true;

    }
}

let addPost = document.querySelector('#addWindow');
let addPost2 = document.querySelector('#addWindowTwo');

const btnAddPhoto = document.querySelector('#btnAddPhoto');

let modal = document.querySelector('.myModal');
let close = document.querySelector('#close');

btnAddPhoto.onclick = () => {
    modal.style.display = 'block';
}