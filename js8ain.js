// Tunggu sehingga semua elemen HTML dimuatkan
document.addEventListener("DOMContentLoaded", function() {
    
    const mainForm = document.getElementById('mainForm');
    const requiredInputs = document.querySelectorAll('.required');
    const hilightInputs = document.querySelectorAll('.hilightable');

    // 1. Logik Highlight (Kuning bila fokus)
    hilightInputs.forEach(input => {
        input.addEventListener('focus', function() {
            this.classList.add('highlight');
        });

        input.addEventListener('blur', function() {
            this.classList.remove('highlight');
        });
    });

    // 2. Logik Validasi semasa Submit
    mainForm.addEventListener('submit', function(event) {
        let isFormValid = true;

        requiredInputs.forEach(input => {
            // Jika ruangan kosong
            if (input.value.trim() === "") {
                input.classList.add('error'); // Tambah warna merah & ikon
                isFormValid = false;
            } else {
                input.classList.remove('error'); // Buang warna merah jika ada isi
            }
        });

        // Jika ada satu pun input .required yang kosong
        if (!isFormValid) {
            event.preventDefault(); // Halang form daripada dihantar
            alert("Sila isi semua ruangan yang diwajibkan!");
        }
    });

    // 3. Buang warna merah secara automatik bila pengguna mula menaip
    requiredInputs.forEach(input => {
        input.addEventListener('input', function() {
            if (this.value.trim() !== "") {
                this.classList.remove('error');
            }
        });
    });

    // 4. Logik butang Clear (Buang semua ralat & highlight)
    mainForm.addEventListener('reset', function() {
        requiredInputs.forEach(input => {
            input.classList.remove('error');
            input.classList.remove('highlight');
        });
    });
});