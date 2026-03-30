// Data Asal
var filenames = ["sikatpink.jpeg", "sikatbiru.jpeg", "sikathijau.jpeg"];
var titles = ["Sikat Pink Comel", "Sikat Biru Moden", "Sikat Hijau Klasik"];
var quantities = [3, 1, 2];
var prices = [7.00, 6.00, 5.00];

const tax_rate = 0.10;
const shipping_threshold = 1000;

// Fungsi utama untuk memaparkan cart
function renderCart() {
    const cartBody = document.getElementById('cart-body');
    cartBody.innerHTML = ""; // Bersihkan table sebelum lukis balik
    let currentSubtotal = 0;

    for (let i = 0; i < titles.length; i++) {
        let lineTotal = quantities[i] * prices[i];
        currentSubtotal += lineTotal;

        let row = document.createElement('tr');
        row.innerHTML = `
            <td><img src="${filenames[i]}" width="80" alt="sikat"></td>
            <td>${titles[i]}</td>
            <td class="center">
                <button class="qty-btn" onclick="changeQty(${i}, -1)">-</button>
                <span class="qty-val">${quantities[i]}</span>
                <button class="qty-btn" onclick="changeQty(${i}, 1)">+</button>
            </td>
            <td class="right">RM${prices[i].toFixed(2)}</td>
            <td class="right">RM${lineTotal.toFixed(2)}</td>
        `;
        cartBody.appendChild(row);
    }

    updateTotals(currentSubtotal);
}

// Fungsi ubah kuantiti
function changeQty(index, delta) {
    if (quantities[index] + delta >= 0) {
        quantities[index] += delta;
        renderCart(); // Lukis semula table bila kuantiti berubah
    }
}

// Fungsi kira total (Subtotal, Tax, Shipping, Grand Total)
function updateTotals(sub) {
    let tax = sub * tax_rate;
    let shipping = (sub > shipping_threshold || sub === 0) ? 0 : 40;
    let grand = sub + tax + shipping;

    document.getElementById('subtotal-val').innerText = "RM" + sub.toFixed(2);
    document.getElementById('tax-val').innerText = "RM" + tax.toFixed(2);
    document.getElementById('shipping-val').innerText = "RM" + shipping.toFixed(2);
    document.getElementById('grand-val').innerText = "RM" + grand.toFixed(2);
}

// Jalankan fungsi buat kali pertama
renderCart();
