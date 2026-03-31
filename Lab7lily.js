function updateCart() {
    let rows = document.querySelectorAll("#cart-body tr");
    let subtotal = 0;

    rows.forEach(row => {
        // Ambil nilai kuantiti (jika kosong, anggap 0)
        let qty = parseFloat(row.querySelector(".qty").value) || 0;
        
        // Ambil teks harga (cth: "80.00")
        let priceText = row.querySelector(".price").textContent;
        let price = parseFloat(priceText) || 0;

        // Kira Amount untuk baris ini
        let amount = qty * price;
        
        // Papar Amount dengan 2 tempat perpuluhan
        row.querySelector(".amount").textContent = "$" + amount.toFixed(2);

        // Tambah ke subtotal keseluruhan
        subtotal += amount;
    });

    // Pengiraan tambahan
    let tax = subtotal * 0.05; // 5% Tax
    let shipping = 40.00;
    let grand = subtotal + tax + shipping;

    // Papar hasil ke bahagian summary
    document.getElementById("subtotal").textContent = "$" + subtotal.toFixed(2);
    document.getElementById("tax").textContent = "$" + tax.toFixed(2);
    document.getElementById("grandtotal").textContent = "$" + grand.toFixed(2);
}

// Tambah "listener" supaya setiap kali user taip atau klik arrow, harga update
document.querySelectorAll(".qty").forEach(input => {
    input.addEventListener("input", updateCart);
    input.addEventListener("change", updateCart);
});

// Jalankan fungsi buat kali pertama semasa page dimuatkan
window.onload = updateCart;
