let data = {};
let hasil = 0;

function tambahData(dapatkanBarang) {
    if (dapatkanBarang.nama in data) {
        data[dapatkanBarang.nama].jumlah++;
    } else {
        data[dapatkanBarang.nama] = {
            harga: dapatkanBarang.harga,
            jumlah: 1
        };
    }

    kiraHasil();
    renderTroli();
}

function kiraHasil() {
    hasil = 0;
    for (let key in data) {
        hasil += data[key].harga * data[key].jumlah;
    }
}

function renderTroli() {
    let troli = document.querySelector("#troli");
    if (!troli) return;
    
    // Kosongkan bakul sebelum lukis baru
    troli.innerHTML = "";
    
    if (Object.keys(data).length === 0) {
        troli.innerHTML = "<p>Bakul anda kosong</p>";
        return;
    }
    
    for (let key in data) {
        let itemContainer = document.createElement("div");
        itemContainer.classList.add("kandungan-kedua");
        
        itemContainer.innerHTML = `
            <div>${key} (${data[key].jumlah}x)</div>
            <div>
                <button class="buang" onclick="buangItem('${key}')">
                    <i class="fa-solid fa-trash-can"></i> Buang
                </button>
            </div>
        `;
        troli.appendChild(itemContainer);
    }
    
    // Bahagian Jumlah
    let jumlahContainer = document.createElement("div");
    jumlahContainer.classList.add("jumlah");
    jumlahContainer.innerHTML = `
        <p>Jumlah</p>
        <p class="bold">RM${hasil.toFixed(2)}</p>
    `;
    troli.appendChild(jumlahContainer);
}

function buangItem(nama) {
    if (data[nama]) {
        if (data[nama].jumlah > 1) {
            data[nama].jumlah--;
        } else {
            delete data[nama];
        }
        kiraHasil();
        renderTroli();
    }
}