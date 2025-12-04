document.addEventListener("DOMContentLoaded", () => {

    /* ===========================================
       AMBIL ELEMEN
    ============================================ */
    const title = document.querySelector("h1");
    const nav = document.querySelector("nav");
    const header = document.querySelector("header");
    const h2List = document.querySelectorAll("h2");
    const headerSubtitle = header.querySelector("p");

    // Elemen untuk fitur interaktif (TUGAS DOSEN)
    const themeBtn = document.getElementById("toggleTheme");
    const greetBtn = document.getElementById("greetBtn");
    const greetingText = document.getElementById("greeting");


    /* ===========================================
       ANIMASI MENGETIK SAAT HEADER DIKLIK
    ============================================ */
    const textTitle = "HALO SAHABAT, NYARI APA HAYOOOO";
    let index = 0;
    let modeAnimasi = false;

    function ketikJudul() {
        if (index < textTitle.length) {
            title.textContent += textTitle.charAt(index);
            index++;
            setTimeout(ketikJudul, 60);
        }
    }

    // H1 awal
    title.textContent = "IRAWATI";


    /* ===========================================
       HEADER DIKLIK → NAV TOGGLE + ANIMASI H1
    ============================================ */
    header.addEventListener("click", () => {

        // NAV muncul/hilang
        nav.classList.toggle("show-nav");

        // Jika sudah animasi → kembalikan normal
        if (modeAnimasi) {
            modeAnimasi = false;

            title.textContent = "IRAWATI";
            if (headerSubtitle) headerSubtitle.style.display = "block";

            console.log("Header diklik → kembali ke mode normal");
            return;
        }

        // Mulai animasi
        modeAnimasi = true;
        index = 0;

        if (headerSubtitle) headerSubtitle.style.display = "none";

        title.textContent = "";
        ketikJudul();

        console.log("Header diklik → animasi mengetik mulai");
    });



    /* ===========================================
       TEKAN F → UBAH UKURAN H2
    ============================================ */
    let fontToggled = false;

    document.addEventListener("keydown", (event) => {
        if (event.key === "f") {

            fontToggled = !fontToggled;

            h2List.forEach(h2 => {
                h2.style.fontSize = fontToggled ? "28px" : "";
            });

            console.log("Tombol F ditekan → ukuran H2 berubah");
        }
    });



    /* ===========================================
       FITUR TUGAS: DARK MODE BUTTON
    ============================================ */
    if (themeBtn) {
        themeBtn.addEventListener("click", () => {

            document.body.classList.toggle("dark-mode");

            console.log("Tombol Tema diklik");

            themeBtn.innerText =
                document.body.classList.contains("dark-mode")
                ? "Ubah ke Light Mode"
                : "Ubah ke Dark Mode";
        });
    }

    // Keyboard D untuk toggle dark mode
    document.addEventListener("keydown", (event) => {
        if (event.key === "d") {
            document.body.classList.toggle("dark-mode");
            console.log("Keyboard 'D' → Toggle Dark Mode");
        }
    });



    /* ===========================================
       FITUR TUGAS: TOMBOL SAPA PENGUNJUNG
    ============================================ */
    if (greetBtn) {
        greetBtn.addEventListener("click", () => {

            console.log("Tombol Sapa diklik");

            let nama = prompt("Siapa nama kamu?");

            if (nama && nama.trim() !== "") {
                greetingText.innerText =`Halo, ${nama}! 👋`;
            } else {
                greetingText.innerText = "Halo, sayang!";
            }
        });
    }



    /* ===========================================
       HOVER HEADER (BIRU)
    ============================================ */
    header.addEventListener("mouseover", () => {
        header.style.backgroundColor = "#0057ecff";
    });

    header.addEventListener("mouseout", () => {
        header.style.backgroundColor = "#fff";
    });



    /* ===========================================
       SCROLL → BACKGROUND BIRU GRADIENT
    ============================================ */
    window.addEventListener("scroll", () => {
        if (window.scrollY > 200) {
            document.body.style.background =
                "linear-gradient(135deg, #8ea5c7ff, #334c77ff, #003b8e)";
        } else {
            document.body.style.background = "";
        }
    });

});

<sulit>bagian yang sulit adalah memahami materi dari video apalagi saya cukup lambat dalam memahami materi jika tidak secara langsung setelah berhasil perasaan saya sangat senang</sulit>
