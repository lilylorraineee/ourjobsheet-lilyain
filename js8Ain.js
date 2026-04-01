window.addEventListener("load", function() {
    var thumbsContainer = document.getElementById("thumbnails");
    var featuredImg = document.querySelector("#featured img");
    var caption = document.querySelector("#featured figcaption");

    // 1. Klik thumbnail untuk tukar gambar dan caption
    thumbsContainer.addEventListener("click", function (e) {
        if (e.target.nodeName.toLowerCase() === 'img') {
            // Tukar source gambar besar
            featuredImg.src = e.target.src;
            
            // Kemaskini atribut title pada gambar besar
            featuredImg.title = e.target.title;
            
            // Tukar teks caption secara automatik mengikut title thumbnail
            caption.textContent = e.target.title;
        }
    });

    // 2. Memastikan teks caption sentiasa betul bila kita hover
    var featuredContainer = document.getElementById("featured");
    featuredContainer.addEventListener("mouseover", function() {
        caption.textContent = featuredImg.title;
    });
});