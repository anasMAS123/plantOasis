const modeButton = document.getElementsByClassName("mode-button")[0]; //mode-button
console.log(modeButton);
const modeButtonImg = document.getElementsByClassName("mode-image")[0]; // image of the mode button

let mode = localStorage.getItem("mode")
  ? localStorage.getItem("mode")
  : "light";

if (mode === "dark") {
  document.documentElement.style.setProperty("--main-color", "#222831");
  document.documentElement.style.setProperty(
    "--main-background-color",
    "#222831"
  );
  document.documentElement.style.setProperty("--text-color", "white");
  document.documentElement.style.setProperty("--border-color", "white");
  document.documentElement.style.setProperty("--member-border-color", "white");
  modeButtonImg.src = "./public/sun.png";
} else {
  document.documentElement.style.setProperty("--main-color", "#5cb338");
  document.documentElement.style.setProperty(
    "--main-background-color",
    "white"
  );
  document.documentElement.style.setProperty("--text-color", "black");
  document.documentElement.style.setProperty("--border-color", "#eee");
  document.documentElement.style.setProperty(
    "--member-border-color",
    "#5cb338"
  );

  modeButtonImg.src = "./public/night.png";
}

modeButton.addEventListener("click", function () {
  if (localStorage.getItem("mode") === "light") {
    document.documentElement.style.setProperty("--main-color", "#222831");
    document.documentElement.style.setProperty(
      "--main-background-color",
      "#222831"
    );
    document.documentElement.style.setProperty("--text-color", "white");
    document.documentElement.style.setProperty("--border-color", "white");
    document.documentElement.style.setProperty(
      "--member-border-color",
      "white"
    );

    localStorage.setItem("mode", "dark");
    modeButtonImg.src = "./public/sun.png";
  } else {
    document.documentElement.style.setProperty("--main-color", "#5cb338");
    document.documentElement.style.setProperty(
      "--main-background-color",
      "white"
    );
    document.documentElement.style.setProperty("--text-color", "black");
    document.documentElement.style.setProperty("--border-color", "#eee");
    document.documentElement.style.setProperty(
      "--member-border-color",
      "#5cb338"
    );

    localStorage.setItem("mode", "light");
    modeButtonImg.src = "./public/night.png";
  }
});
// ---------------------------------------------------------------------------------- //
const nameAdder = document.getElementsByClassName("name-adder")[0];

const url = new URL(window.location.href); // get the current url
const params = new URLSearchParams(url.search); // get the current queries
const name = params.get("fname");
nameAdder.textContent += `,${name}`;
