document.addEventListener("DOMContentLoaded", () => {
    const output = document.getElementById("output");

    function createPromise(index) {
        return new Promise((resolve) => {
            const time = (Math.random() * 2 + 1).toFixed(3); // Between 1 and 3 seconds
            setTimeout(() => resolve({ index, time }), time * 1000);
        });
    }

    const promises = [createPromise(1), createPromise(2), createPromise(3)];

    Promise.all(promises).then((results) => {
        // Remove loading row
        document.getElementById("loading").remove();

        let maxTime = 0;
        results.forEach(({ index, time }) => {
            maxTime = Math.max(maxTime, parseFloat(time));
            const row = `<tr><td>Promise ${index}</td><td>${time}</td></tr>`;
            output.innerHTML += row;
        });

        // Add Total row
        output.innerHTML += `<tr><td>Total</td><td>${maxTime.toFixed(3)}</td></tr>`;
    });
});
