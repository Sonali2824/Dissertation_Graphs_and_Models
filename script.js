const slideshows = document.querySelectorAll('.slideshow');

slideshows.forEach(slideshow => {
    const images = slideshow.querySelectorAll('img');
    let currentIndex = 0;

    function showImage(index) {
        images.forEach(image => image.style.display = 'none');
        images[index].style.display = 'block';
    }

    showImage(currentIndex);

    slideshow.querySelector('.prev').addEventListener('click', () => {
        currentIndex = (currentIndex - 1 + images.length) % images.length;
        showImage(currentIndex);
    });

    slideshow.querySelector('.next').addEventListener('click', () => {
        currentIndex = (currentIndex + 1) % images.length;
        showImage(currentIndex);
    });
});
