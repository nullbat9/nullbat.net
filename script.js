secret_message = "eliter is fair and balanced";
keyPresses = [];
document.addEventListener("keydown", (event) => {
    keyPresses.push(event.key);
    if(keyPresses.join("").includes(secret_message)){
        window.location.assign("aidan.html");
        keyPresses = [];
    }
});

// Modal functionality
document.addEventListener('DOMContentLoaded', () => {
    const modal = document.getElementById('imageModal');
    const modalImg = document.getElementById('modalImage');
    const closeBtn = document.getElementsByClassName('close')[0];
    const galleryImages = document.querySelectorAll('.gallery img, .lego-gallery img');

    galleryImages.forEach(img => {
        img.addEventListener('click', () => {
            modal.style.display = 'flex';
            modalImg.src = img.src;
            modalImg.alt = img.alt;
        });
    });

    closeBtn.addEventListener('click', () => {
        modal.style.display = 'none';
    });

    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.style.display = 'none';
        }
    });

    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && modal.style.display === 'flex') {
            modal.style.display = 'none';
        }
    });
});
