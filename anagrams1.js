function alphabetize(a) {
    return a.toLowerCase().split("").sort().join("").trim()
}
function getAnagramsOf(inputValue) {
    const results = []
    const sorted = alphabetize(inputValue)
    for (let word of words) {
        let sort = alphabetize(word)
        if (sorted === sort) {
            results.push(word)
        }
    }
    document.getElementById("results").textContent = results.join(", ")
}
const button = document.getElementById('findButton')
button.onclick = function () {
    const typedText = document.getElementById('input').value
    getAnagramsOf(typedText)
}