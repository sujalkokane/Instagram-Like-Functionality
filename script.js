const ClickArea=document.querySelector('.inner-div');
const Clickcount=document.querySelector('.Clickcount');

let likeCount=0;
{/* <i class="fas fa-heart"></i> */}
const showHeart = (e) => {
    const heart = document.createElement('i');
    ClickArea.appendChild(heart);
    heart.classList.add('fas');
    heart.classList.add('fa-heart');

    setTimeout(() => {
        heart.remove();
    }, 800);

}


ClickArea.addEventListener('dblclick',(e) => {
    Clickcount.innerHTML=++likeCount;

    showHeart(e);
});
