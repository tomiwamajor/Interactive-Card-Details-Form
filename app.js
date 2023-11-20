"strict";
const btn = document.querySelector(".btn");

const error = document.querySelector(".error");

btn.addEventListener("click", (e) => {
  e.preventDefault();

  const nameLabel = document.querySelector(".name").value;
  const numberLabel = document.querySelector(".number").value;
  const monthLabel = document.querySelector(".month").value;
  const yearLabel = document.querySelector(".year").value;
  const cvcLabel = document.querySelector(".pin").value;

  if (nameLabel && numberLabel && monthLabel && yearLabel && cvcLabel) {
    console.log(nameLabel, numberLabel, monthLabel, yearLabel, cvcLabel);
    document.querySelector(".author").textContent = nameLabel;
    document.querySelector(
      ".expiration"
    ).textContent = `${monthLabel} / ${yearLabel}`;
    document.querySelector(".card-number").textContent = numberLabel;
    document.querySelector(".cvc").textContent = cvcLabel;
    document.querySelector(".container-white").style.display = "none";
    document.querySelector(".container-thanks").style.display = "flex";

    // document.querySelector("form").style.display = "none";
  }
});
