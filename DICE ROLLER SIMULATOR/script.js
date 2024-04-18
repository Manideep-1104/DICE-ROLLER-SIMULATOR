document.getElementById("rollButton").addEventListener("click", function() {
    var rollResult = Math.floor(Math.random() * 6) + 1;
    document.getElementById("result").innerText = "You rolled: " + rollResult;
});
