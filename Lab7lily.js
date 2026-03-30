// Guna data dari fail data.js (filenames, titles, quantities, prices)
const tax_rate = 0.10; // 10% mengikut arahan lab [cite: 30]
const shipping_threshold = 1000; // [cite: 31]

function renderCart() {
    const cartBody = document.getElementById('cart-body');
    cartBody.innerHTML = "";
    let subtotal = 0;

    for (let i = 0; i < titles.length; i++) {
        let total = quantities[i] * prices[i];
        subtotal += total;

        let row = `<tr>
            <td><img src="images/${filenames[i]}"></td>
            <td>${titles[i]}</td>
            <td class="center">
                <button class="qty-btn" onclick="changeQty(${i}, -1)">-</button>
                <span style="margin:0 10px">${quantities[i]}</span>
                <button class="qty-btn" onclick="changeQty(${i}, 1)">+</button>
            </td>
            <td class="right">$${prices[i].toFixed(2)}</td>
            <td class="right">$${total.toFixed(2)}</td>
        </tr>`;
        cartBody.innerHTML += row;
    }
    calculateFinal(subtotal);
}

function changeQty(index, val) {
    if (quantities[index] + val >= 0) {
        quantities[index] += val;
        renderCart();
    }
}

function calculateFinal(sub) {
    let tax = sub * tax_rate;
    let shipping = (sub > shipping_threshold || sub === 0) ? 0 : 40;
    let grand = sub + tax + shipping;

    document.getElementById("subtotal-val").textContent = "$" + sub.toFixed(2);
    document.getElementById("tax-val").textContent = "$" + tax.toFixed(2);
    document.getElementById("shipping-val").textContent = "$" + shipping.toFixed(2);
    document.getElementById("grand-val").textContent = "$" + grand.toFixed(2);
}

// Jalankan fungsi
renderCart();
