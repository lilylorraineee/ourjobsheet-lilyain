function updateCart(){
    let rows = document.querySelectorAll("#cart-body tr");
    let subtotal = 0;

    rows.forEach(row => {
        let qty = parseFloat(row.querySelector(".qty").value) || 0;
        let price = parseFloat(row.querySelector(".price").textContent) || 0;

        let amount = qty * price;
        // Tukar unit kepada $
        row.querySelector(".amount").textContent = "$" + amount.toFixed(2);

        subtotal += amount;
    });

    let tax = subtotal * 0.05;
    let shipping = 40;
    let grand = subtotal + tax + shipping;

    // Paparkan hasil dalam unit $
    document.getElementById("subtotal").textContent = "$" + subtotal.toFixed(2);
    document.getElementById("tax").textContent = "$" + tax.toFixed(2);
    document.getElementById("grandtotal").textContent = "$" + grand.toFixed(2);
}

// Event listener untuk setiap kali input kuantiti berubah
document.querySelectorAll(".qty").forEach(input => {
    input.addEventListener("input", updateCart);
});

// Jalankan fungsi pengiraan semasa halaman mula dimuatkan
window.onload = updateCart;
