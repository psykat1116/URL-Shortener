let inputURL = document.getElementById("longURL");
let outputURL = document.getElementById("shortURL");
let generateBtn = document.getElementById("generate");
let copyBtn = document.getElementById("copy");

function generateShortURL() {
    if (inputURL.value == "") {
        window.alert("Please Enter A URL");
        return;
    }
    let fetchURL = `https://api.shrtco.de/v2/shorten?url=${inputURL.value}`;
    fetch(fetchURL).then((res) => res.json()).then((data) => {
        outputURL.value = data.result.full_short_link;
    })
}

function copyURL() {
    let url = outputURL.value;
    navigator.clipboard.writeText(url);
    copyBtn.style.color = "blueviolet";
    copyBtn.style.background = "#fff";
    copyBtn.style.border = "1px solid #232323";
    setTimeout(() => {
        copyBtn.style.color = "#fff";
        copyBtn.style.background = "blueviolet";
        copyBtn.style.border = "none";
    }, 300)
}

generateBtn.addEventListener("click", generateShortURL);
copyBtn.addEventListener("click", copyURL);