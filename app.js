const allRangeInputs = document.querySelectorAll('input[type = "range"]');
const result = document.querySelector(".result");
const copyBtn = document.querySelector(".copyBtn");

class App {
  constructor() {
    this.getRangeValue();
  }

  getRangeValue() {
    allRangeInputs.forEach((input) => {
      this.changeBgColor();
      input.nextElementSibling.textContent = input.value;
      input.addEventListener("input", () => {
        input.nextElementSibling.textContent = input.value;
        this.changeBgColor();
      });
    });
  }

  changeBgColor() {
    // prettier-ignore
    let rgba = [...allRangeInputs].reduce((prev, curr) => [...prev, curr.value],[]);
    document.body.style.backgroundColor = `rgba(${rgba.join(",")})`;

    copyBtn.addEventListener("click", this.copyToClipboard(rgba));

    this.showResult(rgba);
  }

  showResult(rgba) {
    result.textContent = `rgba(${rgba})`;
  }

  copyToClipboard(value) {
    navigator.clipboard.writeText(`rgba(${value})`);
  }
}

const app = new App();
