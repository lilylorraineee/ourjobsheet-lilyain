function updateCart(){

    let rows = document.querySelectorAll("#cart-body tr");
    let subtotal = 0;

    rows.forEach(row => {
        let qty = row.querySelector(".qty").value;
        let price = row.querySelector(".price").textContent;

        let amount = qty * price;
        row.querySelector(".amount").textContent = "$" + amount.toFixed(2);

        subtotal += amount;
    });

    let tax = subtotal * 0.05;
    let shipping = 40;
    let grand = subtotal + tax + shipping;

    document.getElementById("subtotal").textContent = "$" + subtotal.toFixed(2);
    document.getElementById("tax").textContent = "$" + tax.toFixed(2);
    document.getElementById("grandtotal").textContent = "$" + grand.toFixed(2);
}

document.querySelectorAll(".qty").forEach(input => {
    input.addEventListener("input", updateCart);
});

updateCart();
