const findFibonacci = document.querySelector("#fibonacciNumber");
findFibonacci.addEventListener("click", runSearchFunction);

function runSearchFunction(e) {
    e.preventDefault();
    const selNumber = document.getElementById("number").value;
    axios({
        url: "http://localhost:3000/fibonacci/"+selNumber,
        method: "get",
    })
    .then((resp) => {
        const fibSeq = resp.data.num;
        document.getElementById("paragraph").style.visibility = "visible"
        document.getElementById("thisFibonacciNumber").innerHTML = fibSeq;
    })
    .catch((err) => {
        console.error(err);
        document.getElementById("thisFibonacciNumber").innerHTML = "Error";
    })
}