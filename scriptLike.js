let imgLike = document.querySelector('#instagramHert');
let photoInst = document.querySelector('#imgInWindow');
let likeBtn = document.querySelector('#likeBtn');


let isPhotoClicked = false;

photoInst.ondblclick     = () => {
    if(isPhotoClicked) {
        imgLike.style.display = 'none';
        likeBtn.style.background = 'none';
        isPhotoClicked = false;
    }else {
        imgLike.style.display = 'block';
        likeBtn.style.background = 'red';
        isPhotoClicked = true;

    }
}