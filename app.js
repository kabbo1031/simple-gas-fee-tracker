document.getElementById("loadBtn").addEventListener("click", async function () {
    log("Loading gas fees");

    const data = await loadGasFees();
    updateUI(data);
});
