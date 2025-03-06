//your JS code here. If required.
document.addEventListener("DOMContentLoaded", async function () {
    const outputTable = document.getElementById("output");
    outputTable.innerHTML = `<tr><td colspan="2">Loading...</td></tr>`;

    function createPromise(index) {
        const time = (Math.random() * (3 - 1) + 1).toFixed(3);
        return new Promise((resolve) => {
            setTimeout(() => resolve({ index, time }), time * 1000);
        });
    }

    const promises = [createPromise(1), createPromise(2), createPromise(3)];
    const results = await Promise.all(promises);

    outputTable.innerHTML = "";
    let maxTime = 0;

    results.forEach(({ index, time }) => {
        maxTime = Math.max(maxTime, parseFloat(time));
        outputTable.innerHTML += `<tr><td>Promise ${index}</td><td>${time}</td></tr>`;
    });

    outputTable.innerHTML += `<tr><td>Total</td><td>${maxTime.toFixed(3)}</td></tr>`;
});