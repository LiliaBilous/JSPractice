const imageCollection = document.querySelectorAll(".image-to-show");
const imageCollectionLength = imageCollection.length;
let currentIndex = 1;

function changePhoto() {
    imageCollection.forEach((image, index) => {
        if (index === currentIndex) {
            image.classList.add('active');
        } else {
            image.classList.remove('active');
        }
    });
    currentIndex = (currentIndex + 1) % imageCollectionLength;
    console.log(currentIndex)
    
}
setInterval(changePhoto, 10000);
