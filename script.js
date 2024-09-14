const display = document.getElementById('display');
const categorySelect = document.getElementById('categorySelect');
const dzikirImage = document.getElementById('dzikirImage'); // Referensi ke elemen gambar
const soundToggleButton = document.getElementById('soundToggleButton');
const countButton = document.getElementById('countButton');
const backButton = document.getElementById('backButton');
const resetButton = document.getElementById('resetButton');

let isSoundEnabled = true;

// Menyimpan hitungan untuk setiap kategori
const counts = {
    'tasbih': 0,
    'tahmid': 0,
    'takbir': 0,
    'tahlil': 0
};

// Fungsi untuk memperbarui gambar berdasarkan kategori yang dipilih
function updateImage() {
    const category = categorySelect.value;
    let imagePath = '';

    if (category === 'tasbih') {
        imagePath = 'images/tasbih.png';
    } else if (category === 'tahmid') {
        imagePath = 'images/tahmid.png';
    } else if (category === 'takbir') {
        imagePath = 'images/takbir.png';
    } else if (category === 'tahlil') {
        imagePath = 'images/tahlil.png';
    }

    dzikirImage.src = imagePath; // Perbarui sumber gambar
}

// Fungsi untuk memperbarui tampilan count
function updateDisplay() {
    const category = categorySelect.value;
    display.textContent = counts[category];
}

// Fungsi untuk mengupdate count berdasarkan aksi
function updateCount(action) {
    const category = categorySelect.value;
    
    if (action === 'increment') {
        counts[category]++;
    } else if (action === 'decrement') {
        if (counts[category] > 0) counts[category]--;
    } else if (action === 'reset') {
        counts[category] = 0;
    }

    updateDisplay();
    
    if (isSoundEnabled) {
        new Audio('audio/click-sound.mp3').play();
    }
}

// Fungsi untuk toggle suara
function toggleSound() {
    isSoundEnabled = !isSoundEnabled;
    soundToggleButton.textContent = isSoundEnabled ? 'Sound ON' : 'Sound OFF';
}

// Event Listener untuk update gambar saat kategori berubah
categorySelect.addEventListener('change', () => {
    updateImage();
    updateDisplay();
});

countButton.addEventListener('click', () => updateCount('increment'));
backButton.addEventListener('click', () => updateCount('decrement'));
resetButton.addEventListener('click', () => updateCount('reset'));
soundToggleButton.addEventListener('click', toggleSound);

// Update tampilan awal
updateImage();
updateDisplay();
