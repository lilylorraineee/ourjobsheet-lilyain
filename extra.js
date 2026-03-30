let data = {};
let hasil;
let troli = document.querySelector("#troli");
let paparjumlah_elemen = document.querySelector("#jumlah");

function tambahData(dapatkanBarang) {
    if (dapatkanBarang.name in data) {
        data[dapatkanBarang.name].jumlah++;
    } else {
        data[dapatkanBarang.name] = {
            harga: dapatkanBarang.harga,
            jumlah: 1
        };
    }

    kiraHasil();
    renderTroli();
    kemaskiniHarga(); // Saya tukar nama fungsi sikit untuk elak ralat "not a function"
}

// Fungsi untuk kemaskini harga pada skrin
function kemaskiniHarga() {
    kosongkanElemen(paparjumlah_elemen);
    let p = document.createElement("p");
    p.classList.add('bold');
    p.innerHTML = `RM${hasil.toFixed(2)}`;
    paparjumlah_elemen.appendChild(p);
}

// LOGIK BUANG SATU-SATU ADA DI SINI
function buangBarang(barangUntukDibuang) {
    if (data[barangUntukDibuang]) {
        // Jika jumlah lebih dari 1, kurangkan 1 sahaja
        if (data[barangUntukDibuang].jumlah > 1) {
            data[barangUntukDibuang].jumlah--;
        } 
        // Jika jumlah tinggal 1, baru delete terus
        else {
            delete data[barangUntukDibuang];
        }
    }
    
    kiraHasil();
    renderTroli();
    kemaskiniHarga();
}

function kiraHasil() {
    hasil = 0;
    for (let key in data) {
        hasil += data[key].harga * data[key].jumlah;
    }
}

function renderTroli() {
    kosongkanElemen(troli);
    for (let key in data) {
        let div_barang = document.createElement("div");
        let div_butang = document.createElement("div");
        let i = document.createElement("i");
        let butang = document.createElement("button");

        butang.classList.add("buang");
        // Memanggil fungsi buangBarang dengan nama barang
        butang.setAttribute("onclick", `buangBarang('${key}')`);
        
        i.classList.add("fa-solid");
        i.classList.add("fa-trash-can");
        div_barang.classList.add("kedua-padding");

        butang.appendChild(i);
        div_butang.appendChild(butang);
        i.insertAdjacentHTML("afterend", "<span> Buang</span>");

        div_barang.innerHTML = `${key} (${data[key].jumlah}x)`;

        troli.appendChild(div_barang);
        troli.appendChild(div_butang);
    }
}

function kosongkanElemen(elemen) {
    while (elemen.firstChild) {
        elemen.removeChild(elemen.firstChild);
    }
}