function outputCartRow(file, title, quantity, price, total) {
    document.write('<tr>');
    // Memaparkan gambar
    document.write('<td><img src="' + file + '" width="80" alt="sikat"></td>');
    document.write('<td>' + title + '</td>');
    document.write('<td class="center">' + quantity + '</td>');
    document.write('<td class="right">RM' + price.toFixed(2) + '</td>');
    document.write('<td class="right">RM' + total.toFixed(2) + '</td>');
    document.write('</tr>');
}

// Tambah fungsi-fungsi pengiraan ini supaya Lab7lily.js boleh berfungsi
function calculateTotal(quantity, price) {
    return quantity * price;
}

function calculateTax(subtotal, rate) {
    return subtotal * rate;
}

function calculateShipping(subtotal, threshold) {
    return (subtotal > threshold) ? 0 : 40;
}

function calculateGrandTotal(subtotal, tax, shipping) {
    return subtotal + tax + shipping;
}

function outputCurrency(num) {
    document.write("RM" + num.toFixed(2));
}