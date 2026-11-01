
// ======================================
// COSMOS - MINI UNIVERSE
// ======================================

// GEZEGEN VERİLERİ

const planets = {
    mercury: {
        name: "MERKÜR",
        type: "TERRESTRIAL PLANET",
        diameter: "4.879 km",
        temperature: "167 °C",
        moons: "0",
        year: "88 gün",
        description: "Merkür, Güneş'e en yakın ve Güneş sistemindeki en küçük gezegendir. Neredeyse hiç atmosferi olmadığı için sıcaklık değişimleri oldukça fazladır.",
        fact: "Merkür'de bir gün, bir yıldan daha uzun sürer!",
        color: "radial-gradient(circle at 30% 30%, #d5d0c8, #77736e 70%, #45413e)"
    },

    venus: {
        name: "VENÜS",
        type: "TERRESTRIAL PLANET",
        diameter: "12.104 km",
        temperature: "464 °C",
        moons: "0",
        year: "225 gün",
        description: "Venüs, kalın karbondioksit atmosferi ve güçlü sera etkisi nedeniyle Güneş sisteminin en sıcak gezegenidir.",
        fact: "Venüs kendi ekseni etrafında diğer gezegenlerin çoğuna göre ters yönde döner!",
        color: "radial-gradient(circle at 30% 30%, #ffe6a8, #c88b50 65%, #70442e)"
    },

    earth: {
        name: "DÜNYA",
        type: "TERRESTRIAL PLANET",
        diameter: "12.742 km",
        temperature: "15 °C",
        moons: "1",
        year: "365 gün",
        description: "Dünya, bildiğimiz kadarıyla yaşamın var olduğu tek gezegendir. Sıvı suya, koruyucu atmosfere ve güçlü bir manyetik alana sahiptir.",
        fact: "Dünya yüzeyinin yaklaşık %71'i sularla kaplıdır!",
        color: "radial-gradient(circle at 30% 30%, #8be3ff, #176bc0 60%, #082b69)"
    },

    mars: {
        name: "MARS",
        type: "TERRESTRIAL PLANET",
        diameter: "6.779 km",
        temperature: "-65 °C",
        moons: "2",
        year: "687 gün",
        description: "Mars, demir oksit içeren yüzeyi nedeniyle kızıl görünür. Bilim insanları geçmişte sıvı su bulunmuş olabileceğine dair kanıtları araştırmaktadır.",
        fact: "Mars'ta Güneş sisteminin en büyük volkanı olan Olympus Mons bulunur!",
        color: "radial-gradient(circle at 30% 30%, #ffbd8b, #bd5132 65%, #64251c)"
    },

    jupiter: {
        name: "JÜPİTER",
        type: "GAS GIANT",
        diameter: "139.820 km",
        temperature: "-110 °C",
        moons: "100+",
        year: "11,86 yıl",
        description: "Jüpiter, Güneş sisteminin en büyük gezegenidir. Hidrojen ve helyum ağırlıklı gazlardan oluşur ve güçlü bir manyetik alana sahiptir.",
        fact: "Büyük Kırmızı Leke, Jüpiter üzerinde yüzyıllardır gözlemlenen devasa bir fırtınadır!",
        color: "repeating-linear-gradient(0deg, #d6a47c 0px, #edc8a4 10px, #a56a48 17px)"
    },

    saturn: {
        name: "SATÜRN",
        type: "GAS GIANT",
        diameter: "116.460 km",
        temperature: "-140 °C",
        moons: "140+",
        year: "29,4 yıl",
        description: "Satürn, buz, kaya parçaları ve tozdan oluşan görkemli halkalarıyla tanınır. Yoğunluğu sudan daha düşüktür.",
        fact: "Satürn'ün halkaları binlerce kilometre genişliğe ulaşır!",
        color: "radial-gradient(circle at 30% 30%, #f6e0ad, #c2a06c 70%, #85623e)"
    },

    uranus: {
        name: "URANÜS",
        type: "ICE GIANT",
        diameter: "50.724 km",
        temperature: "-195 °C",
        moons: "25+",
        year: "84 yıl",
        description: "Uranüs, metan içeren atmosferi nedeniyle mavi-yeşil görünür. Eksen eğikliği yaklaşık 98 derecedir.",
        fact: "Uranüs, adeta yan yatmış şekilde Güneş'in etrafında dolanır!",
        color: "radial-gradient(circle at 30% 30%, #c5ffff, #76d5d9 70%, #398b9d)"
    },

    neptune: {
        name: "NEPTÜN",
        type: "ICE GIANT",
        diameter: "49.244 km",
        temperature: "-200 °C",
        moons: "15+",
        year: "165 yıl",
        description: "Neptün, Güneş sisteminin sekizinci ve en uzak gezegenidir. Çok güçlü rüzgârları ve derin mavi görünümüyle dikkat çeker.",
        fact: "Neptün'de rüzgâr hızları saatte 2.000 kilometreyi aşabilir!",
        color: "radial-gradient(circle at 30% 30%, #a2d8ff, #3269d6 65%, #142b80)"
    }
};


// ======================================
// YILDIZLARI OLUŞTUR
// ======================================

const starsContainer = document.getElementById("stars");

for (let i = 0; i < 180; i++) {

    const star = document.createElement("div");

    star.className = "star";

    const size = Math.random() * 2 + 1;

    star.style.width = size + "px";
    star.style.height = size + "px";

    star.style.left = Math.random() * 100 + "%";
    star.style.top = Math.random() * 100 + "%";

    star.style.animationDelay = Math.random() * 4 + "s";

    starsContainer.appendChild(star);
}


// ======================================
// GEZEGEN BİLGİ PANELİ
// ======================================

const modal = document.getElementById("planetModal");

function openPlanet(planetId) {

    const planet = planets[planetId];

    if (!planet) return;

    document.getElementById("modalName").textContent = planet.name;

    document.getElementById("modalType").textContent = planet.type;

    document.getElementById("modalDescription").textContent = planet.description;

    document.getElementById("modalDiameter").textContent = planet.diameter;

    document.getElementById("modalTemperature").textContent = planet.temperature;

    document.getElementById("modalMoons").textContent = planet.moons;

    document.getElementById("modalYear").textContent = planet.year;

    document.getElementById("modalFact").textContent = planet.fact;

    document.getElementById("modalPlanet").style.background = planet.color;

    document.getElementById("planetTooltip").textContent =
        planet.name + " SELECTED";

    modal.classList.add("active");

}


// Hem yörüngedeki hem kartlardaki gezegenlere tıklama

document.querySelectorAll("[data-planet]").forEach(element => {

    element.addEventListener("click", () => {

        const planetId = element.dataset.planet;

        openPlanet(planetId);

    });

});


// ======================================
// MODAL KAPATMA
// ======================================

document.getElementById("closeModal").addEventListener("click", () => {

    modal.classList.remove("active");

});

modal.addEventListener("click", event => {

    if (event.target === modal) {

        modal.classList.remove("active");

    }

});

document.addEventListener("keydown", event => {

    if (event.key === "Escape") {

        modal.classList.remove("active");

    }

});


// ======================================
// ANİMASYON DURDUR / DEVAM ET
// ======================================

const pauseButton = document.getElementById("pauseButton");

const pauseIcon = document.getElementById("pauseIcon");

const pauseText = document.getElementById("pauseText");

let isPaused = false;

pauseButton.addEventListener("click", () => {

    isPaused = !isPaused;

    document.body.classList.toggle("paused", isPaused);

    if (isPaused) {

        pauseIcon.textContent = "▶";

        pauseText.textContent = "ANİMASYONU BAŞLAT";

    } else {

        pauseIcon.textContent = "Ⅱ";

        pauseText.textContent = "ANİMASYONU DURDUR";

    }

});


// ======================================
// YAKINLAŞTIRMA / UZAKLAŞTIRMA
// ======================================

const solarSystem = document.getElementById("solarSystem");

let zoom = window.innerWidth <= 600 ? 0.55 :
    window.innerWidth <= 900 ? 0.75 : 0.9;

function updateZoom() {

    solarSystem.style.transform = `scale(${zoom})`;

}

document.getElementById("zoomIn").addEventListener("click", () => {

    zoom = Math.min(zoom + 0.1, 1.3);

    updateZoom();

});

document.getElementById("zoomOut").addEventListener("click", () => {

    zoom = Math.max(zoom - 0.1, 0.35);

    updateZoom();

});

document.getElementById("resetZoom").addEventListener("click", () => {

    zoom = window.innerWidth <= 600 ? 0.55 :
        window.innerWidth <= 900 ? 0.75 : 0.9;

    updateZoom();

});


// ======================================
// RASTGELE UZAY BİLGİLERİ
// ======================================

const facts = [

    "Güneş, Güneş sisteminin toplam kütlesinin yaklaşık %99,86'sını oluşturur.",

    "Işık, Güneş'ten Dünya'ya yaklaşık 8 dakika 20 saniyede ulaşır.",

    "Jüpiter'in uydularından Europa'nın buzlu yüzeyinin altında bir okyanus bulunabileceği düşünülüyor.",

    "Venüs, kendi ekseni etrafında oldukça yavaş döner.",

    "Satürn'ün yoğunluğu sudan daha düşüktür.",

    "Neptün, Güneş'ten yaklaşık 4,5 milyar kilometre uzaktadır.",

    "Ay, Dünya'dan her yıl yaklaşık 3,8 santimetre uzaklaşır.",

    "Mars'ta bir gün yaklaşık 24 saat 37 dakika sürer.",

    "Uranüs'ün atmosferinde metan gazı bulunur.",

    "Güneş yaklaşık 4,6 milyar yaşındadır."

];

const factText = document.getElementById("randomFact");

document.getElementById("newFact").addEventListener("click", () => {

    const currentFact = factText.textContent;

    let newFact;

    do {

        newFact = facts[Math.floor(Math.random() * facts.length)];

    } while (newFact === currentFact);

    factText.textContent = newFact;

});


// ======================================
// BAŞLANGIÇ
// ======================================

console.log("COSMOS SYSTEM INITIALIZED.");

console.log("Welcome to the universe! 🚀");



/* =========================================
   COSMOS — INTRO SCREEN CONTROL
========================================= */

document.addEventListener("DOMContentLoaded", () => {
    const intro = document.getElementById("intro-screen");

    if (!intro) return;

    const hideIntro = () => {
        intro.classList.add("intro-hidden");

        setTimeout(() => {
            intro.remove();
        }, 850);
    };

    // Açılış animasyonunu tamamla
    setTimeout(hideIntro, 3000);
});
