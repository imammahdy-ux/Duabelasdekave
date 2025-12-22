const sliderTrack = document.getElementById('galeri-slider-track');
const sliderItems = document.querySelectorAll('#galeri-slider-track .slider-item');
let currentSlideIndex = 0;

// Fungsi untuk memutar audio
function playSlideSound() {
    const slideSound = document.getElementById('slide-sound');
    if (slideSound) {
        slideSound.currentTime = 0; // Mengatur ulang audio ke awal
        slideSound.play().catch(e => console.error("Error playing audio:", e));
    }
}

function showSlide(index) {
  const offset = -index * 100; 
  sliderTrack.style.transform = `translateX(${offset}%)`;
}

function nextSlide() {
  currentSlideIndex = (currentSlideIndex + 1) % sliderItems.length;
  showSlide(currentSlideIndex);
  playSlideSound(); // Memanggil fungsi pemutar audio di sini
}


if (sliderItems.length > 0) { 
  showSlide(currentSlideIndex);
  setInterval(nextSlide, 3000);
}

const jadwalPelajaran = {
  "Senin": ["MPP", "KNK"], 
  "Selasa": ["KNK", "MAT", "BIN",], 
  "Rabu": ["BMD", "BING", "PKN","KNK"], 
  "Kamis": ["PQI", "KNK", "PKK"], 
  "Jumat": [ "KNK", "BING"], 
  "Sabtu": ["Libur"],
  "Minggu": ["Libur"]
};

const jadwalPiket = {
  "Senin": ["Illa", "Izaz", "Stefani", "Imam", "Suleman", "Selvi", "Dendra"],
  "Selasa": ["Nizar", "Yani", "Danil", "Bintang", "Dika", "Tsania", "Tiko"],
  "Rabu": ["Yasin", "Aris", "Dinda", "Santi", "David", "Ais"],
  "Kamis": ["Fitri", "Farel", "Jimmy", "Vani", "Aril", "Diana"],
  "Jumat": ["Andre", "Wulan", "Bunga", "Virly", "Imelda"],
  "Sabtu": ["Tidak ada"],
  "Minggu": ["Tidak ada"]
};

function getHariIni() {
  const hariList = ["Minggu", "Senin", "Selasa", "Rabu", "Kamis", "Jumat", "Sabtu"];
  const today = new Date();
  return hariList[today.getDay()];
}

function tampilkanJadwalHariIni() {
  const hariIni = getHariIni();

  let pelajaran = jadwalPelajaran[hariIni] ? jadwalPelajaran[hariIni].join(", ") : "Tidak ada jadwal pelajaran.";
  let piket = jadwalPiket[hariIni] ? jadwalPiket[hariIni].join(", ") : "Tidak ada jadwal piket.";

  const container = document.getElementById("jadwalHariIni");
  container.innerHTML = `
    <h2>Jadwal ${hariIni}</h2>
    <table>
      <thead>
        <tr><th>Mata Pelajaran</th><th>Piket</th></tr>
      </thead>
      <tbody>
        <tr>
          <td>${pelajaran}</td>
          <td>${piket}</td>
        </tr>
      </tbody>
    </table>
  `;
}

document.addEventListener("DOMContentLoaded", () => {
  tampilkanJadwalHariIni();
});

function toggleFotoPameran(event) {
  event.preventDefault();
  const foto = document.getElementById('foto-pameran');
  foto.style.display = (foto.style.display === 'block') ? 'none' : 'block';
}

function toggleFoto(event, id) {
    event.preventDefault();
    var el = document.getElementById(id);
    el.hidden = !el.hidden
}
document.addEventListener('DOMContentLoaded', function () {
    const hamburgerMenu = document.querySelector('.hamburger-menu');
    const navLinks = document.querySelector('.nav-links');

    hamburgerMenu.addEventListener('click', function () {
        navLinks.classList.toggle('active');
        hamburgerMenu.classList.toggle('active');
    });

    // Optional: Close menu when a link is clicked (for single-page apps)
    navLinks.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            if (navLinks.classList.contains('active')) {
                navLinks.classList.remove('active');
                hamburgerMenu.classList.remove('active');
            }
        });
    });
});
