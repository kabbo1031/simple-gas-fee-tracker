async function loadGasFees() {
    const provider = getProvider();

    const gasPrice = await provider.getGasPrice();
    const base = ethers.utils.formatUnits(gasPrice, "gwei");

    return {
        slow: (base * 0.8).toFixed(2) + " Gwei",
        normal: base + " Gwei",
        fast: (base * 1.2).toFixed(2) + " Gwei"
    };
}
