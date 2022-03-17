let imgLike = document.querySelector('.instagramHert');
let likeBtn = document.querySelector('#likeBtn');
let photoInst = document.querySelector('.imgInWindow');
let window1 = document.querySelector('.window');

let isPhotoClicked = false;

window1.ondblclick = () => {
    checkLets();
    clickedToPhoto();
}

let wholiked = false;

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

// Работает, но не совсем понял принцип

let isLikeBtn = false;

likeBtn.onclick = () => {
    if(isLikeBtn) {
        likeBtn.style.background = '';
        isLikeBtn = false;
        wholiked = false;
    }else {
        likeBtn.style.background = 'red';
        wholiked.innerText += 'Yuriy';
        isLikeBtn = true;
        wholiked = true;
    }
}

// добавление нового поста на сайт
let addPost = document.querySelector('#addWindow');
let addPost2 = document.querySelector('#addWindowTwo');

const btnAddPhoto = document.querySelector('#btnAddPhoto');

let modal = document.querySelector('.myModal');
let close = document.querySelector('#close');

btnAddPhoto.onclick = () => {
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

let addInfoPost = document.querySelector('#addInfoPost');
let sendModal = document.querySelector('#inModalSend');
let infoPost = document.querySelector('#infoPost');

let postDescription;
let addNameUser;


let err = document.querySelector('#error');

sendModal.onclick = () => {
        postDescription = document.querySelector('#textareaInModal').value;
        addNameUser = document.querySelector('#addNameUser').value;
        let validResult = validatePostDescription();
        if(validResult != '') { //проверяю что validResult не пустой 
            err.innerHTML = validResult;
        } else {
            modal.style.display = 'none';
            addPost.style.display = 'block';
            addPost2.style.display = 'block';
            addInfoPost.innerHTML += addNameUser + ': ' + postDescription;
        }
}
// Что делает - функция проверяет глобальную переменную Post..
// Что принимает - пустож
// что возвращает - 1.Пустоту в случае успеха
//                  2.Текст ошибки в случае ошибки валидации
function validatePostDescription() {
    if(postDescription === '') {
        return 'You not enter information about post!'
    } if(addNameUser === '') {
        return 'You not enter user name!'
    }
    return '';
}

const btnBackProfile = document.querySelector('#btnBackProfile');

btnBackProfile.onclick = () => {
    document.location.href = 'myProfile.HTML';
}