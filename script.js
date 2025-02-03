const quotes = [
    "Believe in yourself and all that you are. - Christian D. Larson",
    "The best way to predict the future is to create it. - Peter Drucker",
    "Do what you can, with what you have, where you are. - Theodore Roosevelt",
    "Success is not final, failure is not fatal: it is the courage to continue that counts. - Winston Churchill",
    "You are never too old to set another goal or to dream a new dream. - C.S. Lewis"
];

function generateQuote() {
    let randomIndex = Math.floor(Math.random() * quotes.length);
    document.getElementById("quote").innerText = quotes[randomIndex];
}
