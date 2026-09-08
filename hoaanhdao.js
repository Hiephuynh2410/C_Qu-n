/* =========================
   Sakura falling effect
   ========================= */

(function createSakuraEffect() {
  const container = document.getElementById("sakura-container");

  if (!container) return;

  // Ít hoa hơn trên điện thoại
  const isMobile = window.innerWidth <= 720;
  const numberOfPetals = isMobile ? 20 : 45;

  const random = (min, max) => {
    return Math.random() * (max - min) + min;
  };

  const randomDrift = () => {
    return `${random(-120, 120).toFixed(1)}px`;
  };

  for (let i = 0; i < numberOfPetals; i++) {
    const petal = document.createElement("span");

    petal.className = "sakura-petal";

    const size = random(8, 19);
    const fallDuration = random(8, 18);
    const spinDuration = random(1.8, 4.5);

    petal.style.setProperty(
      "--left",
      `${random(0, 100).toFixed(1)}vw`
    );

    petal.style.setProperty(
      "--size",
      `${size.toFixed(1)}px`
    );

    petal.style.setProperty(
      "--opacity",
      random(0.45, 0.95).toFixed(2)
    );

    petal.style.setProperty(
      "--fall-duration",
      `${fallDuration.toFixed(1)}s`
    );

    petal.style.setProperty(
      "--spin-duration",
      `${spinDuration.toFixed(1)}s`
    );

    // Giá trị âm giúp hoa xuất hiện ngay khi tải trang
    petal.style.setProperty(
      "--delay",
      `${random(-18, 0).toFixed(1)}s`
    );

    petal.style.setProperty("--drift-one", randomDrift());
    petal.style.setProperty("--drift-two", randomDrift());
    petal.style.setProperty("--drift-three", randomDrift());
    petal.style.setProperty("--drift-four", randomDrift());
    petal.style.setProperty("--drift-five", randomDrift());

    // Hai sắc độ hồng ngẫu nhiên
    const pinkVariant = Math.random();

    if (pinkVariant > 0.5) {
      petal.style.setProperty("--petal-light", "#ffd8e5");
      petal.style.setProperty("--petal-dark", "#f38cad");
    } else {
      petal.style.setProperty("--petal-light", "#fff0f5");
      petal.style.setProperty("--petal-dark", "#ffabc3");
    }

    container.appendChild(petal);
  }
})();