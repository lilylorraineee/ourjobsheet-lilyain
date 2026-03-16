// Fungsi semak jika kosong 
function isBlank(inputField) {
    return inputField.value === "";
}

// Fungsi buang ralat 
function makeClean(element) {
    element.classList.remove("error");
}

window.addEventListener("load", function() {
    // Highlight kuning bila klik 
    var hilightableInputs = document.querySelectorAll(".hilightable");
    for (var i = 0; i < hilightableInputs.length; i++) {
        hilightableInputs[i].addEventListener("focus", function(e) {
            e.target.classList.toggle("highlight");
        });
        hilightableInputs[i].addEventListener("blur", function(e) {
            e.target.classList.toggle("highlight");
        });
    }

    // Buang merah bila mula taip 
    var requiredInputs = document.querySelectorAll(".required");
    for (var i = 0; i < requiredInputs.length; i++) {
        requiredInputs[i].addEventListener("change", function(e) {
            makeClean(e.target);
        });
    }

    // Semakan semasa Submit 
    var mainForm = document.getElementById("mainForm");
    mainForm.addEventListener("submit", function(e) {
        var requiredInputs = document.querySelectorAll(".required");
        for (var i = 0; i < requiredInputs.length; i++) {
            if (isBlank(requiredInputs[i])) {
                e.preventDefault(); // Halang hantar borang 
                requiredInputs[i].classList.add("error"); // Tambah ralat 
            } else {
                makeClean(requiredInputs[i]);
            }
        }
    });
});