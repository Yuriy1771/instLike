let imgLike = document.querySelector('#instagramHert');
let photoInst = document.querySelector('#imgInWindow');
let name;

// photoInst.ondblclick = () => {
//     imgLike.style.display = 'block';
// } 

// if(imgLike == true) {
//     photoInst.ondblclick = () => {
//             imgLike.style.display = 'block';
//         } 
// } else {
//     imgLike.style.display = 'none';
// }

photoInst.ondblclick = () => {
    imgLike.style.display = 'block';
    if(photoInst.ondblclick) {

    }else {
    imgLike.style.display = 'none';
    }
} 